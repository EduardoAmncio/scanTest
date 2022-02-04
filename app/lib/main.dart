import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';

const primaryColor = Color(0xFF323751);

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarBrightness: Brightness.dark,
    ),
  );

  await FlutterDownloader.initialize();
  runApp(App());
}

class App extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitBank 450',
      theme: ThemeData(
        brightness: Brightness.dark,
        platform: TargetPlatform.iOS,
      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        return CupertinoPageRoute(
          builder: (context) => Home(),
        );
      },
    );
  }
}

class Home extends StatefulWidget {
  Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final _initialUrl = 'https://osbmobile.fitbank.com.br/';
  String? _downloadTaskId;
  InAppWebViewController? _webViewController;

  @override
  void initState() {
    super.initState();
    FlutterDownloader.registerCallback(_downloadCallback);

    _requestPermissions();
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(context),
      child: Scaffold(
        backgroundColor: primaryColor,
        body: SafeArea(
          child: InAppWebView(
            initialUrlRequest: URLRequest(url: Uri.parse(_initialUrl)),
            onWebViewCreated: (controller) {
              _webViewController = controller;
              _webViewController?.clearCache();
            },
            initialOptions: InAppWebViewGroupOptions(
              crossPlatform: InAppWebViewOptions(
                useOnDownloadStart: true,
                supportZoom: false,
              ),
              android: AndroidInAppWebViewOptions(
                useHybridComposition: true,
              ),
              ios: IOSInAppWebViewOptions(
                allowsInlineMediaPlayback: true,
              ),
            ),
            androidOnPermissionRequest: _onRequestAndroidPermissions,
            onDownloadStart: (controller, url) async {
              final permissionGranted = await _checkPermission();
              if (!permissionGranted) {
                _showAlertDialog(
                  context,
                  "Permissão para download negada",
                  "Aceite para continuar",
                );
                return;
              }

              final path = await _getDownloadDirectory();
              if (path == null) {
                _showAlertDialog(
                  context,
                  "Falha no download",
                  "Diretorio incorreto",
                );
                return;
              }

              final taskId = await FlutterDownloader.enqueue(
                url: "$url",
                savedDir: path,
                showNotification: true,
                openFileFromNotification: true,
              );
              setState(() {
                _downloadTaskId = taskId;
              });
            },
          ),
        ),
      ),
    );
  }

  Future<bool> _onWillPop(BuildContext context) async {
    final canGoBack = await _webViewController?.canGoBack() ?? false;
    if (canGoBack) {
      await _webViewController?.goBack();
      return false;
    }

    final willPop = await showDialog(
      context: context,
      builder: (context) {
        final buttonStyle = Theme.of(context).textTheme.button?.copyWith(
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.white
                  : primaryColor,
            );

        return AlertDialog(
          title: Text('Sair do app'),
          content: Text('Deseja mesmo sair do app?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(false);
              },
              child: Text('NÃO', style: buttonStyle),
            ),
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(true);
              },
              child: Text('SIM', style: buttonStyle),
            )
          ],
        );
      },
    );

    return willPop ?? false;
  }

  Future<PermissionRequestResponse?> _onRequestAndroidPermissions(
    InAppWebViewController controller,
    String origin,
    List<String> resources,
  ) async {
    return PermissionRequestResponse(
      resources: resources,
      action: PermissionRequestResponseAction.GRANT,
    );
  }

  Future<T?> _showAlertDialog<T>(
    BuildContext context,
    String title,
    String content,
  ) {
    return showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text(title),
          content: Text(content),
          actions: [
            TextButton(
              child: Text("Fechar"),
              onPressed: () {
                Navigator.of(context).pop(true);
              },
            ),
          ],
        );
      },
    );
  }

  Future _requestPermissions() async {
    await Permission.camera.request();
    await Permission.microphone.request();
    await Permission.storage.request();
  }

  Future<bool> _checkPermission() async {
    PermissionStatus permission = await Permission.storage.request();
    return permission.isGranted;
  }

  Future<String?> _getDownloadDirectory() async {
    String? dir;
    if (Platform.isAndroid)
      dir = "/storage/emulated/0/Download";
    else
      dir = (await getApplicationDocumentsDirectory()).path;

    return dir;
  }

  static void _downloadCallback(
    String id,
    DownloadTaskStatus status,
    int progress,
  ) {}
}
