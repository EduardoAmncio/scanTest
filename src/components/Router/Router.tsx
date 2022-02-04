import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "components/ProtectedRoute";
import { SignIn } from "features/authentication/pages/SignIn";
import { Welcome } from "features/onboarding/pages/Welcome";
import { Terms } from "features/onboarding/pages/Terms";
import { ActivateAccount } from "features/onboarding/pages/ActivateAccount";
import { AccountActivationCompleted } from "features/onboarding/pages/AccountActivationCompleted";
import { AccountActivationCompletedForCard } from "features/onboarding/pages/AccountActivationCompletedForCard";
import { CreatePassword } from "features/onboarding/pages/ActivateBySMS/CreatePasswordForSMS";
import { ConfirmPassword } from "features/onboarding/pages/ActivateBySMS/ConfirmPasswordForSMS";
import { ActivationToken } from "features/onboarding/pages/ActivateBySMS/ActivationTokenForSMS";
import { EnterTaxPayer } from "features/onboarding/pages/ActivateBySMS/EnterTaxPayerForSMS";
import { EnterTaxPayerForCard } from "features/onboarding/pages/ActivateByCard/EnterTaxPayerForCard";
import { EnterIdentifierForCard } from "features/onboarding/pages/ActivateByCard/EnterIdentifierForCard";
import { EnterDigitsForCard } from "features/onboarding/pages/ActivateByCard/EnterDigitsForCard";
import { EnterPhoneForCard } from "features/onboarding/pages/ActivateByCard/EnterPhoneForCard";
import { EnterTokenForCard } from "features/onboarding/pages/ActivateByCard/EnterTokenForCard";
import { CreatePasswordForCard } from "features/onboarding/pages/ActivateByCard/CreatePasswordForCard";
import { ConfirmPasswordForCard } from "features/onboarding/pages/ActivateByCard/ConfirmPasswordForCard";
import { InvalidDataForCard } from "features/onboarding/pages/ActivateByCard/InvalidDataForCard";
import { EnterBirthDateForCard } from "features/onboarding/pages/ActivateByCard/EnterBirthDateForCard";
import { BankStatement } from "features/account/pages/BankStatement";
import { Home } from "features/account/pages/Home";
import { AllAccounts } from "features/account/pages/AllAccounts";
import { SignOut } from "features/authentication/pages/SignOut";
import { AccountSettings } from "features/account/pages/AccountSettings";
import { BankStatementFilter } from "features/account/pages/BankStatementFilter";
import { Details } from "features/account/pages/Details";
import { Receipt } from "features/account/pages/Receipt";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { PaymentAttach } from "features/payment/pages/PaymentAttach";
import { PaymentReceipt } from "features/payment/pages/PaymentReceipt";
import { PaymentRoutes } from "features/payment/constants/routes";
import { BarCodeScanner } from "features/payment/pages/BarCodeScanner";
import { BarCodePayment } from "features/payment/pages/BarCodePayment";
import { PaymentData } from "features/payment/pages/PaymentData";
import { ChangeValue } from "features/payment/pages/ChangeValue";
import { CompletedPayment } from "features/payment/pages/CompletedPayment";
import { PaymentEmptyDescription } from "features/payment/pages/PaymentEmptyDescription/PaymentEmptyDescription";
import { AttachDocuments } from "features/transference/pages/AttachDocuments";
import { CompletedTransfer } from "features/transference/pages/CompletedTransfer";
import { FavoredAccountSelection } from "features/transference/pages/FavoredAccountSelection";
import { ScheduleTransfer } from "features/transference/pages/ScheduleTransfer";
import { Summary } from "features/transference/pages/Summary/Summary";
import { SummaryPayment } from "features/payment/pages/Summary";
import { TransferDescription } from "features/transference/pages/TransferDescription";
import { Transference } from "features/transference/pages/Transference/Transference";
import { TransferReceipt } from "features/transference/pages/TransferReceipt/";
import { TransferValue } from "features/transference/pages/TransferValue";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { FavoredIdentification } from "features/transference/pages/FavoredIdentification";
import { UserRoutes } from "features/user/constants/routes";
import { UserInformation } from "features/user/pages/UserInformation";
import { ChangeEmail } from "features/user/pages/ChangeEmail";
import { ChangePhone } from "features/user/pages/ChangePhone";
import { ChangeNickname } from "features/user/pages/ChangeNickname";
import { ChangePassword } from "features/user/pages/ChangePassword";
import { ChooseNewPassword } from "features/user/pages/ChooseNewPassword";
import { ConfirmNewPasswordUserInformation } from "features/user/pages/ConfirmNewPassword";
import { CurrentAddress } from "features/user/pages/CurrentAddress";
import { ChangeAddress } from "features/user/pages/ChangeAddress";
import { ChangeConclude } from "features/user/pages/ChangeConclude";
import { FavoredName } from "features/transference/pages/FavoredName";
import { SelectBank } from "features/transference/pages/SelectBank";
import { SelectAccountType } from "features/transference/pages/SelectAccountType";
import { BankBranch } from "features/transference/pages/BankBranch";
import { AccountNumber } from "features/transference/pages/AccountNumber";
import { EditAccount } from "features/account/pages/EditAccount";
import { QrCodeTransferRoutes } from "features/qrCodeTransfer/constants/routes";
import { QrCodeTransfer } from "features/qrCodeTransfer/pages/QrCodeTransfer/QrCodeTransfer";
import { GenerateQrCodeTransfer } from "features/qrCodeTransfer/pages/GenerateQrCodeTransfer/GenerateQrCodeTransfer";
import { ShowQrCodeTransfer } from "features/qrCodeTransfer/pages/ShowQrCodeTransfer";
import { ReadQrCodeTransfer } from "features/qrCodeTransfer/pages/ReadQrCodeTransfer";
import { QrCodeTransferSendingDetails } from "features/qrCodeTransfer/pages/QrCodeTransferSendingDetails";
import { CompletedQrCodeTransfer } from "features/qrCodeTransfer/pages/CompletedQrCodeTransfer";
import { CompletedSmsTransfer } from "features/smsTransfer/pages/CompletedSmsTransfer";
import { SmsTransferRoutes } from "features/smsTransfer/constants/routes";
import { SmsTransferNumber } from "features/smsTransfer/pages/SmsTransferNumber";
import { SmsTransferName } from "features/smsTransfer/pages/SmsTransferName";
import { SmsTransferValue } from "features/smsTransfer/pages/SmsTransferValue";
import { SmsTransferAttachDocuments } from "features/smsTransfer/pages/SmsTransferAttachDocuments";
import { SmsTransferReceipt } from "features/smsTransfer/pages/SmsTransferReceipt";
import { SmsTransferSummary } from "features/smsTransfer/pages/SmsTransferSummary";
import { SmsTransferDescription } from "features/smsTransfer/pages/SmsTransferDescription";
import { ValidatePhone } from "features/onboarding/pages/ActivateBySMS/ValidatePhoneForSMS/ValidatePhoneForSMS";
import { BirthDate } from "features/onboarding/pages/ActivateBySMS/BirthDateForSMS";
import { CreateName } from "features/onboarding/pages/ActivateBySMS/CreateNameForSMS";
import { CardRoutes } from "features/card/constants/routes";
import { CardManagement } from "features/card/pages/CardManagement";
import { CardOption } from "features/card/pages/CardOption";
import { EnterCurrentPassword } from "features/card/pages/ChangePassword/EnterCurrentPassword";
import { EnterNewPassword } from "features/card/pages/ChangePassword/EnterNewPassword";
import { ConfirmNewPassword } from "features/card/pages/ChangePassword/ConfirmNewPassword";
import { ValidationTokenPassword } from "features/card/pages/ChangePassword/ValidationTokenPassword";
import { CancellationReplacementCard } from "features/card/pages/CancellationReplacementCard";
import { CancelReason } from "features/card/pages/Cancellation/CancelReason";
import { CancelCardAlert } from "features/card/pages/Cancellation/CancelCardAlert";
import { BlockingReason } from "features/card/pages/RequestDuplicate/BlockingReason";
import { BlockCardAlert } from "features/card/pages/RequestDuplicate/BlockCardAlert";
import { AddressConfirmation } from "features/card/pages/RequestDuplicate/AddressConfirmation";
import { ReplacementDetails } from "features/card/pages/RequestDuplicate/ReplacementDetails";
import { UpdateAddress } from "features/card/pages/RequestDuplicate/UpdateAddress";
import { ActiveNewCard } from "features/card/pages/AssociateNewCard/ActiveNewCard";
import { AssociateFourDigits } from "features/card/pages/AssociateNewCard/AssociateFourDigits";
import { AssociateNewCardCheckData } from "features/card/pages/AssociateNewCard/AssociateNewCardCheck";
import { ValidateNewPassword } from "features/card/pages/AssociateNewCard/ValidateNewPassword";
import { EnterNewPasswordAssociate } from "features/card/pages/AssociateNewCard/EnterNewPasswordAssociate";
import { ConfirmNewPasswordAssociate } from "features/card/pages/AssociateNewCard/ConfirmNewPasswordAssociate";
import { LandingPage } from "features/onboarding/pages/LandingPage";
// import { TaxPaymentRoutes } from "features/taxPayment/constants/routes";
// import { PaymentDarj } from "features/taxPayment/pages/Darj/PaymentDarj";
// import { PaymentDarjType } from "features/taxPayment/pages/Darj/PaymentDarjType";
// import { PaymentDarjValues } from "features/taxPayment/pages/Darj/PaymentDarjValues";
// import { PaymentDarjDueDate } from "features/taxPayment/pages/Darj/PaymentDarjDueDate";
// import { PaymentDarjDescription } from "features/taxPayment/pages/Darj/PaymentDarjDescription";
// import { PaymentDarjSummary } from "features/taxPayment/pages/Darj/PaymentDarjSummary";
// import { PaymentDarjConclude } from "features/taxPayment/pages/Darj/PaymentDarjConclude";
// import { PaymentDarjCodeNumber } from "features/taxPayment/pages/Darj/PaymentDarjCodeNumber";
import { TopUpSchedule } from "features/topUp/pages/TopUpSchedule";
import { TopUpNumber } from "features/topUp/pages/TopUpNumber";
import { TopUp } from "features/topUp/pages/TopUp";
import { PeriodicRepetition } from "features/topUp/pages/PeriodicRepetition";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { TopUpValue } from "features/topUp/pages/TopUpValue";
import { CheckDataTopUp } from "features/topUp/pages/CheckDataTopUp";
import { CompleteTopUp } from "features/topUp/pages/CompleteTopUp";
import { ConcludeTopUp } from "features/topUp/pages/ConcludeTopUp";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Redirect to="/payment/barcode-scanner" />
      </Route>
        <Route exact path={OnboardingRoutes.welcome} component={Welcome} />
        <Route path={OnboardingRoutes.terms} component={Terms} />
        <Route
          exact
          path={OnboardingRoutes.activateAccount}
          component={ActivateAccount}
        />
        <Route
          path={OnboardingRoutes.activationTokenForSMS}
          component={ActivationToken}
        />
        <Route
          path={OnboardingRoutes.enterTaxPayerForSMS}
          component={EnterTaxPayer}
        />
        <Route
          path={OnboardingRoutes.createPasswordForSMS}
          component={CreatePassword}
        />
        <Route
          path={OnboardingRoutes.confirmPasswordForSMS}
          component={ConfirmPassword}
        />
        <Route
          path={OnboardingRoutes.accountActivationCompletedForSMS}
          component={AccountActivationCompleted}
        />
        <Route path={OnboardingRoutes.birthDateForSMS} component={BirthDate} />
        <Route
          path={OnboardingRoutes.createNameForSMS}
          component={CreateName}
        />

        <Route
          path={OnboardingRoutes.validatePhoneForSMS}
          component={ValidatePhone}
        />

        <Route
          path={OnboardingRoutes.accountActivationCompletedForCard}
          component={AccountActivationCompletedForCard}
        />
        <Route
          path={OnboardingRoutes.enterTaxPayerForCard}
          component={EnterTaxPayerForCard}
        />
        <Route
          path={OnboardingRoutes.enterIdentifierForCard}
          component={EnterIdentifierForCard}
        />
        <Route
          path={OnboardingRoutes.enterDigitsCard}
          component={EnterDigitsForCard}
        />
        <Route
          path={OnboardingRoutes.enterPhoneCard}
          component={EnterPhoneForCard}
        />
        <Route
          path={OnboardingRoutes.enterTokenForCard}
          component={EnterTokenForCard}
        />
        <Route
          path={OnboardingRoutes.createPasswordForCard}
          component={CreatePasswordForCard}
        />
        <Route
          path={OnboardingRoutes.confirmPasswordForCard}
          component={ConfirmPasswordForCard}
        />
        <Route
          path={OnboardingRoutes.invalidDataForCard}
          component={InvalidDataForCard}
        />
        <Route
          path={OnboardingRoutes.enterBirthdayForCard}
          component={EnterBirthDateForCard}
        />
        <Route path={OnboardingRoutes.landingPage} component={LandingPage} />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.qrCodeTransfer}
          component={QrCodeTransfer}
        />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.generateQrCodeTransfer}
          component={GenerateQrCodeTransfer}
        />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.viewQrCodeTransfer}
          component={ShowQrCodeTransfer}
        />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.readQrCodeTransfer}
          component={ReadQrCodeTransfer}
        />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.sendQrCodeTransfer}
          component={QrCodeTransferSendingDetails}
        />
        <ProtectedRoute
          exact
          path={QrCodeTransferRoutes.completedTransfer}
          component={CompletedQrCodeTransfer}
        />

        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferNumber}
          component={SmsTransferNumber}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferName}
          component={SmsTransferName}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferValue}
          component={SmsTransferValue}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferDescription}
          component={SmsTransferDescription}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferAttachDocuments}
          component={SmsTransferAttachDocuments}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferSummary}
          component={SmsTransferSummary}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.smsTransferReceipt}
          component={SmsTransferReceipt}
        />
        <ProtectedRoute
          exact
          path={SmsTransferRoutes.completedSmsTransfer}
          component={CompletedSmsTransfer}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.home}
          component={UserInformation}
        />
        <ProtectedRoute
          exact
          path={UserRoutes.changeEmail}
          component={ChangeEmail}
        />
        <ProtectedRoute
          exact
          path={UserRoutes.changePhone}
          component={ChangePhone}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.changeChangeNickname}
          component={ChangeNickname}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.changeEmail}
          component={ChangeEmail}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.changePassword}
          component={ChangePassword}
        />
        <ProtectedRoute
          exact
          path={UserRoutes.chooseNewPassword}
          component={ChooseNewPassword}
        />
        <ProtectedRoute
          exact
          path={UserRoutes.confirmNewPassword}
          component={ConfirmNewPasswordUserInformation}
        />
        <ProtectedRoute
          exact
          path={UserRoutes.currentAddress}
          component={CurrentAddress}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.changeAddress}
          component={ChangeAddress}
        />

        <ProtectedRoute
          exact
          path={UserRoutes.changeConclude}
          component={ChangeConclude}
        />

        <Route path={OnboardingRoutes.accountActivationCompletedForCard}>
          <AccountActivationCompletedForCard activeTwoButtons={true} />
        </Route>
        <Route path={AuthenticationRoutes.signIn} component={SignIn} />
        <Route path={AuthenticationRoutes.signOut} component={SignOut} />

        <ProtectedRoute
          exact
          path={AccountRoutes.filter}
          component={BankStatementFilter}
        />
        <ProtectedRoute exact path={AccountRoutes.detail} component={Details} />
        <ProtectedRoute exact path={AccountRoutes.home} component={Home} />
        <ProtectedRoute
          exact
          path={AccountRoutes.bankStatement}
          component={BankStatement}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.settings}
          component={AccountSettings}
        />
        <Route
          exact
          path={PaymentRoutes.barCodeScanner}
          component={BarCodeScanner}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.details}
          component={PaymentData}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.changeValue}
          component={ChangeValue}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.paymentEmptyDescription}
          component={PaymentEmptyDescription}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.completedPayment}
          component={CompletedPayment}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.paymentReceipt}
          component={PaymentReceipt}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.paymentAttach}
          component={PaymentAttach}
        />

        <ProtectedRoute
          exact
          path={PaymentRoutes.summary}
          component={SummaryPayment}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.allAccounts}
          component={AllAccounts}
        />
        <ProtectedRoute
          exact
          path={AccountRoutes.receipt}
          component={Receipt}
        />
        <ProtectedRoute exact path={AccountRoutes.detail} component={Details} />
        <ProtectedRoute
          exact
          path={AccountRoutes.editAccount}
          component={EditAccount}
        />
        <ProtectedRoute
          exact
          path={PaymentRoutes.barCodePayment}
          component={BarCodePayment}
        />
        <ProtectedRoute exact path={AccountRoutes.home} component={Home} />

        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredIdentification}
          component={FavoredIdentification}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredName}
          component={FavoredName}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.selectBank}
          component={SelectBank}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.selectAccountType}
          component={SelectAccountType}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.bankBranch}
          component={BankBranch}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.accountNumber}
          component={AccountNumber}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.attachDocuments}
          component={AttachDocuments}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.completed}
          component={CompletedTransfer}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.favoredAccountSelection}
          component={FavoredAccountSelection}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.schedule}
          component={ScheduleTransfer}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.summary}
          component={Summary}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.description}
          component={TransferDescription}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.voucherTransfer}
          component={TransferReceipt}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.value}
          component={TransferValue}
        />
        <ProtectedRoute
          exact
          path={TransferenceRoutes.transference}
          component={Transference}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.cardManagement}
          component={CardManagement}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.cardOption}
          component={CardOption}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.enterCurrentPassword}
          component={EnterCurrentPassword}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.enterNewPassword}
          component={EnterNewPassword}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.confirmNewPassword}
          component={ConfirmNewPassword}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.validationTokenPassword}
          component={ValidationTokenPassword}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.cancel}
          component={CancellationReplacementCard}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.cancelReason}
          component={CancelReason}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.cancelWarning}
          component={CancelCardAlert}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.reissueReason}
          component={BlockingReason}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.reissueWarning}
          component={BlockCardAlert}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.address}
          component={AddressConfirmation}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.reissueDetails}
          component={ReplacementDetails}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.updateAddress}
          component={UpdateAddress}
        />
        <Route
          exact
          path={CardRoutes.activeNewCard}
          component={ActiveNewCard}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.activeFourDigits}
          component={AssociateFourDigits}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.associateNewCardCheck}
          component={AssociateNewCardCheckData}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.validationTokenPasswordAssociate}
          component={ValidateNewPassword}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.enterNewPasswordAssociate}
          component={EnterNewPasswordAssociate}
        />
        <ProtectedRoute
          exact
          path={CardRoutes.confirmNewPasswordAssociate}
          component={ConfirmNewPasswordAssociate}
        />
        {/* <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarj}
          component={PaymentDarj}
        />
        <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjType}
          component={PaymentDarjType}
        /> */}
        {/* <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjCodeNumber}
          component={PaymentDarjCodeNumber}
        /> */}
        {/* <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjValues}
          component={PaymentDarjValues}
        />
        <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjDueDate}
          component={PaymentDarjDueDate}
        />
        <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjDescription}
          component={PaymentDarjDescription}
        />
        <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjSummary}
          component={PaymentDarjSummary}
        />
        <ProtectedRoute
          exact
          path={TaxPaymentRoutes.paymentDarjConclude}
          component={PaymentDarjConclude}
        /> */}
        <ProtectedRoute
          exact
          path={TopUpRoutes.topUpSchedule}
          component={TopUpSchedule}
        />
        <ProtectedRoute
          exact
          path={TopUpRoutes.topUpNumber}
          component={TopUpNumber}
        />
        <ProtectedRoute exact path={TopUpRoutes.topUp} component={TopUp} />
        <ProtectedRoute
          exact
          path={TopUpRoutes.periodicRepetition}
          component={PeriodicRepetition}
        />
        <ProtectedRoute
          exact
          path={TopUpRoutes.completeTopUp}
          component={CompleteTopUp}
        />
        <ProtectedRoute
          exact
          path={TopUpRoutes.checkDataTopUp}
          component={CheckDataTopUp}
        />
        <ProtectedRoute
          exact
          path={TopUpRoutes.topUpValue}
          component={TopUpValue}
        />
        <ProtectedRoute
          exact
          path={TopUpRoutes.concludeTopUp}
          component={ConcludeTopUp}
        />
      </Switch>
    </BrowserRouter>
  );
};
