import React from "react";
import { Typography, FormControlLabel, Checkbox, Box } from "@material-ui/core";
import { useStyles } from "./TermsText.style";

interface TermsTextProps {
  termsAcceptCheckBox: (event: any) => void;
  valueCheckBox: boolean;
}

export const TermsText = ({
  valueCheckBox,
  termsAcceptCheckBox,
}: TermsTextProps) => {
  const styles = useStyles();

  return (
    <Box
      className={styles.wrapper}
      flexDirection={"column"}
      alignItems="center"
    >
      <Box>
        <Typography variant="caption">{terms}</Typography>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={valueCheckBox}
            onChange={termsAcceptCheckBox}
            name="check"
            color="primary"
          />
        }
        label="Concordo com os termos"
      />
    </Box>
  );
};

const terms = `OTERMO DE SERVIÇO - CONTRATO DE PRESTAÇÃO DE SERVIÇO DE GESTÃO 

(OU ADMINISTRAÇÃO) DE PAGAMENTO 

 

1.	DEFINIÇÕES 

1.1. Para o perfeito entendimento e interpretação do Termo de Serviço, fica estabelecido 

que: 

 

a) INFINITIBANK: empresa sediada na Avenida Magalhães de Castro – 4.800 Torre 1 24º ANDAR SP, sob razão Social: INFINITIBANK CNPJ 05.234.447/0001-49. Interligada a instituições de pagamentos (IP), autorizadas pelo Banco Central, sob o arranjo de pagamentos reguladas pela lei 12.865/13. 

 

b) USUÁRIO: é a pessoa física e/ou jurídica que contrata/utiliza o serviço. 

 

c) CONTA: conta de registro de crédito e/ou débito detida em nome do USUÁRIO para a execução dos saques e recebimentos dos recursos e/ou transações de pagamento através do aplicativo. 

 

d) INSTRUMENTO DE PAGAMENTO: é o dispositivo utilizado para a execução da transação de pagamento. 

 

e) CICLO DE LIQUIDAÇÃO: é o período de tempo entre a transferência do crédito em sua conta que o USUÁRIO tem junto ao aplicativo para a sua conta bancária cadastrada. 

 

f) COMPENSAÇÃO: é um conjunto de procedimentos que permite a transferência dos valores compensados do meio de pagamento à conta de titularidade do USUÁRIO cadastrado no aplicativo. 

 

g) SMS (SHORT MESSAGE SERVICE): Serviço de envio de mensagens por meio de telefone móvel. 

 

h) CENTRAL DO CLIENTE: é o serviço de suporte técnico disponibilizado ao USUÁRIO por meio eletrônico. 

 

i) OPERAÇÃO: a operação entre o USUÁRIO e o sacado. 

 

j) SACADO: aquele responsável pelo pagamento do instrumento de pagamento (boleto bancário ou outro meio de pagamento). 

 

k) REMUNERAÇÃO: valores cobrados pelos Serviços Prestados. 

 

l) PROPRIEDADE INTELECTUAL: Todos os direitos de propriedade intelectual, sem limitação, toda e qualquer patente, marca registrada, nome comercial, nome empresarial (inclusive nomes de domínio e URL), softwares, direito autoral, desenho registrado, direito a banco de dados, direito a desenho não registrado (inclusive direitos sobre semicondutores) ou www.infinitibank.com.br outra proteção de propriedade intelectual ou industrial e qualquer pedido de proteção dessa natureza, e todos os direitos sobre processos sigilosos, direitos morais, conhecimento técnico e invenções (passíveis ou não de registro ou patente), ou outras Informações Confidenciais, em cada caso, registrados ou não registrados, inclusive os pedidos de concessão de tais direitos e todos os outros direitos ou formas correlatas de proteção, em qualquer parte do mundo. 

 

m) INSTITUIDOR DE MEIO DE PAGAMENTO: pessoa jurídica responsável pelo Arranjo de pagamento, podendo ser uma administradora de cartão de crédito, uma instituição financeira e/ou pessoa jurídica que tenha desenvolvido e/ou disponibilize um determinado meio de pagamento/ recebimento. 

  

n) MEIO DE PAGAMENTO: é um conjunto de regras e procedimentos que disciplina a prestação de serviço de pagamento, previsto na Lei 12.865/2013 e nas normas infra legais do Banco Central do Brasil e do Conselho Monetário Nacional. 

 

o) INSTITUIÇÃO DE PAGAMENTO: pessoa jurídica que, através de contratos firmados com um 

ou mais Instituidores de Arranjos de Pagamentos, tem como atividade principal ou acessória, 

a prestação de serviços relacionados, direta ou indiretamente, com o gerenciamento dos Meios de Pagamento. 

 

p) LEI APLICÁVEL: Lei nº 12.865, de 9 de outubro de 2013, as Resoluções do Conselho  Monetário Nacional e as Circulares do Banco Central do Brasil aplicáveis aos Arranjos de pagamento e às Instituições de Pagamento que integram o Sistema de Pagamentos Brasileiro (SPB) e a legislação aplicável aos contratos em geral.  

 

q) BACEN: Banco Central do Brasil. 

 

r) SERVIÇO (S): são conjuntos de ferramentas e serviços online oferecidos pela INFINITIBANK e seus 

prestadores de serviços ao USUÁRIO. Os serviços são fornecidos por meio do aplicativo móvel  ou plataforma web INFINITIBANK, acessados por meio de dispositivos próprios de responsabilidade do USUÁRIO, tendo por escopo a gestão de cobrança, cobrança efetiva e acompanhamento do pagamento. 

 

s) LIQUIDAÇÃO: é a transferência bancária realizada pela INFINITIBANK e seus prestadores de serviços à conta bancária do USUÁRIO cadastrada no aplicativo/plataforma web dos valores  líquidos pagos pelo sacado. 

 

t) VALOR DE LIQUIDAÇÃO: Valor líquido (valor bruto do pagamento recebido do sacado e deduzido da remuneração devida a INFINITIBANK e seus prestadores de serviços, a ser transferido à conta bancária do USUÁRIO cadastrada. 

 

u) KYC (KNOW YOUR CUSTOMER - CONHEÇA O SEU CLIENTE): é o processo realizado pelo INFINITIBANK com o objetivo de atender ao requisito de análise do cliente estipulado pelos Instituidores dos Meios de Pagamento ou pelas autoridades competentes. 

 

2. OBJETO: 

  

2.1. O presente Termo tem por objeto a prestação de serviços de gestão de cobrança e pagamento, cobrança efetiva e acompanhamento de pagamento, que consiste no fornecimento de uma ferramenta online (aplicativo/plataforma web) ao USUÁRIO, de maneira www.infinitiBank.com.br a lhe permitir a cobrança, o acompanhamento e o recebimento de pagamentos do sacado. Em contrapartida, devido aos serviços prestados, haverá o pagamento da remuneração, pelo USUÁRIO. 

 

2.2. O USUÁRIO se declara ciente de que o “Serviço” não é e nem se destina a ser comparável aos serviços financeiros oferecidos por instituições bancárias ou administradores de cartão de crédito, consistindo em modelo de facilitação de Gestão de Cobrança/ Pagamento/ Recebimento entre o USUÁRIO e o sacado. 

  

2.3. O serviço será prestado nos formatos abaixo ofertados: 

a) Conta Gratuita: acesso gratuito ao Aplicativo/Plataforma Web; 

b) O USUÁRIO pagará a INFINITIBANK uma remuneração, em contraprestação, conforme estabelecido em cláusula específica do presente Instrumento. 

  

2.4. Para a consecução do objeto disposto na cláusula 2.1., o instrumento de pagamento adotado pela INFINITIBANK é o “boleto bancário”. Fica a critério, todavia, da INFINITIBANK e seus 

prestadores de serviços disponibilizarem outros instrumentos de pagamento, caso seja de sua conveniência comercial e tecnológica. 

  

2.5. Fica expressamente ajustado entre as partes que a INFINITIBANK e seus prestadores de serviços não é de maneira alguma responsável, principal ou solidariamente, por qualquer valor devido pelo sacado ao USUÁRIO, sendo vedada, portanto, a cobrança ou imputação de obrigação a INFINITIBANK e seus prestadores de serviços quanto ao inadimplemento do sacado de eventuais créditos.  

 

2.6. A INFINITIBANK se reserva ao direito de, a qualquer momento, alterar a ferramenta fornecida via aplicativo móvel ou plataforma web, bem como alterar as opções de contas, valores e formatos a serem ofertados ao USUÁRIO, em conformidade à cláusula 15ª. 

 

3. DO ACESSO AO SERVIÇO: 

 

3.1. Para utilizar o Serviço, o USUÁRIO deverá se cadastrar como pessoa física, inserindo os dados exigidos no formulário online disponível no aplicativo e na plataforma web INFINITIBANK, devendo possuir o equipamento e software necessários à utilização do serviço, que deverão estar conectados à internet, sendo de sua obrigação deixar todos os seus dados atualizados. 

 

3.2. O USUÁRIO poderá, ainda, cadastrar uma pessoa jurídica, desde que ele seja o titular da pessoa jurídica, individual ou da EIRELE, desde que ele faça parte do quadro societário na hipótese de sociedade Limitada ou desde que seja “detentor de procuração” outorgada pelo titular da pessoa. 

 

3.3. O USUÁRIO deverá possuir e cadastrar no aplicativo ao menos uma conta bancária de sua própria titularidade como pessoa física (CPF) ou ao menos uma conta bancária da pessoa jurídica cadastrada (CNPJ) junto a uma instituição financeira devidamente constituída e autorizada a funcionar no território nacional, a ser mantida durante toda a vigência deste Termo ou, na hipótese de o USUÁRIO deixar de movimentar a conta bancária cadastrada, ele deverá prestar de imediato a informação a INFINITIBANK, realizando, para tanto, a alteração no formulário online disponível no aplicativo. www.INFINITIBank.com.br 

 

4. DAS INTERRUPÇÕES, GARANTIAS E RESPONSABILIDADES 

4.1. A INFINITIBANK e seus prestadores de serviços empreenderão esforços comercialmente razoáveis para tornar o serviço disponível, no mínimo, 99% (noventa e nove por cento) durante cada Ano de Serviço. Todavia, o Serviço poderá ser interrompido, sem que haja qualquer direito de indenização ou compensação ao USUÁRIO, para: 

a) Manutenções técnicas e/ou operacionais que exijam o desligamento temporário do sistema ou impossibilitem o acesso a ele. 

b) Casos fortuitos e de força maior. 

c) Ações de terceiros que impeçam a prestação. 

d) Interrupção ou suspensão da prestação dos serviços de telecomunicações. Ocorrências de falhas no sistema de transmissão e/ou roteamento no acesso à Internet. 

  

5. DAS INFORMAÇÕES DADAS PELO USUÁRIO: 

 

5.1. Para se cadastrar, abrir e manter uma conta, o USUÁRIO deverá possuir um endereço de email e telefone celular válidos e informá-los a INFINITIBANK no campo correspondente do formulário online disponível no aplicativo móvel e na plataforma Web, cujas informações serão utilizadas para validação de seu cadastro ou conta para o uso do serviço. 

 

5.2. O USUÁRIO deverá ter preenchido o formulário online com informações precisas, verdadeiras e completas, conforme solicitadas pela INFINITIBANK. O USUÁRIO se responsabiliza civil e criminalmente pela veracidade e exatidão das informações fornecidas no formulário enviado a INFINITIBANK e seus prestadores de serviços . 

 

5.3. Para a validação do cadastro, a INFINITIBANK e seus prestadores de serviços poderá, a seu exclusivo critério, solicitar ao USUÁRIO a apresentação de cópias do RG (Registro Geral) e do CPF (Comprovante de Inscrição e de Situação Cadastral), que poderão ser substituídas pela cópia da CNH (Carteira Nacional de Habilitação), desde que esteja no seu prazo de validade. 

 

5.4. Na hipótese de o USUÁRIO cadastrar uma pessoa jurídica de sua titularidade, ele deverá, impreterivelmente, informar o número do CNPJ (Cadastro Nacional de Pessoa Jurídica) a ser inserido em local específico no formulário online. 

 

5.5. O USUÁRIO terá uma senha (password) pessoal e intransferível para o uso do serviço, a qual deverá ser informada, juntamente com seu e-mail cadastrado (login), toda vez que o USUÁRIO desejar acessar a sua conta e utilizar o serviço. O USUÁRIO se obriga a manter a sua senha em sigilo e não revelar a terceiro, respondendo, individualmente, por eventuais revelações a terceiros. 

 

5.6. A INFINITIBANK e seus prestadores de serviços se reservam ao direito de: 

a) Verificação de identidade. A qualquer tempo o USUÁRIO autoriza a INFINITIBANK e seus 

prestadores de serviços, diretamente ou por meio de terceiros, a fazer todas as consultas e/ ou solicitações consideradas necessárias www.INFINITIBank.com.br para validar sua identidade e informações.  

Nesse sentido, poderá ser solicitado (i) que o USUÁRIO apresente documentos ou informações adicionais, (ii) número de CPF/CNPJ, (iii) que o USUÁRIO siga alguns passos para confirmar que é o titular do e-mail, do celular, ou conta bancária informada, dentre outras solicitações. 

 

b) Autorização de relatório de crédito. O USUÁRIO autoriza a INFINITIBANK e seus prestadores de serviços a obterem seu relatório de crédito pessoal e/ou comercial junto a um birô de crédito como, entre outros, o SPC e a SERASA. Além disso, o USUÁRIO autoriza a INFINITIBANK e seus prestadores de serviços a obterem seu relatório de crédito pessoal e/ou comercial sempre que houver razões e/ou indícios do nível de risco associado à sua conta. 

 

c) Atualização das informações. O USUÁRIO deverá manter atualizado seu cadastro, essencialmente os dados de sua conta bancária e dados pessoais. 

 

5.7. O USUÁRIO se obriga a tomar todas as cautelas necessárias a fim de evitar que terceiros utilizem a sua conta e consequentemente o serviço. O USUÁRIO se responsabiliza pelas operações realizadas em seu nome por terceiros, ainda que sem sua autorização, caso esses terceiros tenham/ tiveram, sem culpa exclusiva da INFINITIBANK e seus prestadores de serviços, acesso à senha ou a outros dados do USUÁRIO, de forma a realizar em nome dele quaisquer operações. 

 

5.8. Como já disposto, o USUÁRIO poderá ter contas vinculadas ao seu CPF e ao CNPJ da empresa na qual ele figura como o único titular ou como sócio. No entanto, a liquidação/ transferência do crédito será realizada à conta corrente bancária cadastrada na Conta daquele que faturar. No caso da “Conta – CNPJ”, a liquidação/transferência do numerário poderá ser realizada à conta bancária cadastrada da própria pessoa jurídica (CNPJ) que faturou ou à conta bancária do titular - pessoa física (CPF). 

 

5.9. Considerando que a liquidação não se dará – de maneira alguma - por transferência para conta de terceiro ou saque direto, na hipótese de falecimento do USUÁRIO, o seu herdeiro deverá apresentar Formal/Escritura de Partilha ou Adjudicação, que indique precisamente o nome do beneficiário/herdeiro e o valor do numerário, assim como deverá indicar uma conta para transferência. 

 

6. SEGURANÇA DE DADOS E DE INFORMAÇÕES: 

 

6.1. A INFINITIBANK e seus prestadores de serviços utilizam tecnologia de codificação e também  outras tecnologias, a fim de proteger as informações confidenciais do USUÁRIO de acessos não autorizados (fraude interna, externa, hackers, entre outros). 

 

6.2. A INFINITIBANK e seus prestadores de serviços irão gerenciar a segurança dos dados e das informações, com esforços razoáveis, para restringir o acesso não autorizado. 

 

6.3. A INFINITIBANK e seus prestadores de serviços garantem que: (i) as informações e os dados sob sua responsabilidade serão devidamente salvos diariamente em cópia de segurança e que as configurações necessárias à recuperação dos dados estarão sempre funcionando; e (ii) medidas adequadas estejam implantadas viabilizando a continuidade dos Serviços, em caso de interrupção imprevista dos serviços. 

 

7. DAS INFORMAÇÕES DO SACADO: 

 

7.1. O USUÁRIO obriga-se a emitir o boleto bancário a quem efetivamente é o responsável por seu pagamento, devendo inserir todos os dados do sacado e outras informações no sistema, conforme disponibilizado no cadastro de sacado/cliente do Serviço, responsabilizando-se pela veracidade das informações fornecidas sobre o sacado. Com efeito, na hipótese de o USUÁRIO alimentar dados equivocados no sistema ou indicar terceiro/sacado, que não tem responsabilidade pelo pagamento, o USUÁRIO assumirá, única e exclusivamente, as eventuais consequências jurídicas e comerciais decorrentes. 

7.2. A qualquer tempo a INFINITIBANK e seus prestadores de serviços reservam-se ao direito de 

contatar o sacado para validar a veracidade das informações, bem como o reconhecimento da transação/emissão do boleto bancário ou de outro meio de pagamento solicitada pelo USUÁRIO. Em caso de sinalização negativa de legitimidade e veracidade das informações, a INFINITIBANK e seus prestadores de serviços poderá efetuar o cancelamento/bloqueio da conta. 

 

8. DA REMUNERAÇÃO, DAS DESPESAS E DOS TRIBUTOS: 

 

8.1. Pela contraprestação do Serviços, disponibilizados pela INFINITIBANK e seus prestadores de serviços ao USUÁRIO, os valores devidos serão correspondentes as condições que foram estabelecidas e acordadas entre INFINITIBANK e USUÁRIO. 

  

8.2. Sempre que houver alteração quanto ao valor da remuneração, a INFINITIBANK informará e prestará as devidas informações no aplicativo (Resumo da Cobrança), sendo vedada a possibilidade ao USUÁRIO, para todos os efeitos, alegar ignorância ou desconhecimento do novo valor para fundamentar o inadimplemento da remuneração, para cancelar a ordem de pagamento, ou para solicitar o ressarcimento entre a diferença do valor revisado e o valor praticado anteriormente. 

  

8.3. Na hipótese de o sacado inadimplir determinado boleto bancário e o USUÁRIO não pagar a remuneração devida a INFINITIBANK e seus prestadores de serviços relativa a tal boleto, este poderá, a seu critério, descontar o pagamento da remuneração em aberto em outro boleto bancário, independentemente de quem seja o sacado. 

 

8.4. Cada parte será somente responsável pelo pagamento dos tributos que são devidos em decorrência direta ou indireta de sua atividade, de acordo com a responsabilidade do contribuinte, conforme definido na legislação tributária. Com efeito, nenhuma parte se responsabilizará, subsidiariamente ou solidariamente, pelo pagamento de tributos que sejam obrigação de outra parte. 

 

9. DOS BOLETOS DE PAGAMENTO/BANCÁRIO EMITIDOS E DOS CRÉDITOS EM 

CONTA: 

 

9.1. O USUÁRIO poderá consultar o andamento da compensação e liquidação dos boletos  emitidos (Ciclo de Liquidação), assim como os créditos depositados em sua Conta, a  qualquer momento, por meio de mecanismos disponibilizados pela INFINITIBANK e seus  prestadores de serviços no aplicativo móvel e ou na plataforma Web, sendo que as informações são atualizadas automaticamente no sistema. 

 

9.2. Os créditos existentes na Conta do USUÁRIO não sofrerão qualquer correção monetária,  acréscimo de juros ou qualquer tipo de atualização financeira, permanecendo inalterados por todo o prazo em que forem mantidos na Conta. A INFINITIBANK e seus prestadores de serviços não terão qualquer responsabilidade pela desvalorização ou desatualização monetária do valor dos créditos mantidos pelo USUÁRIO em sua Conta. A INFINITIBANK e seus prestadores de serviços 

poderão receber juros sobre os valores que mantiver em seu nome. 

  

9.3. Os prazos e procedimentos relativos à liquidação dos créditos à conta bancária do USUÁRIO estão estabelecidos na cláusula 12, que trata da liquidação. 

 

10. DA LIQUIDAÇÃO: 

 

10.2. A INFINITIBANK e seus prestadores de serviços somente realizarão a liquidação dos montantes processados quando receber as referidas quantias das Instituições Financeiras, isto é,  somente quando o crédito já estiver disponível na conta do USUÁRIO. 

10.3. O USUÁRIO reconhece que a INFINITIBANK e seus prestadores de serviços não tem influência sobre a duração dos períodos de compensação praticados pelas Instituições Financeiras. 

 

10.4. Esclarece-se, ainda, que a INFINITBANK e seus prestadores de serviços são obrigados a seguiras Regras de cada Instituidor de Meio de Pagamento e de Instituições Financeiras e não tem qualquer controle sobre elas. 

 

11. DA PROIBIÇÃO DE PRÁTICAS ILÍCITAS E IMORAIS E DAS OBRIGAÇÕES DO 

USUÁRIO: 

 

11.1. O Serviço não poderá ser utilizado de forma alguma em desacordo com o previsto e autorizado no presente Instrumento. Ainda, o USUÁRIO se obriga a respeitar: 

a) as cláusulas e condições do presente Termo. 

b) a Política de Privacidade e as Regras de Uso do aplicativo. 

c) a legislação brasileira aplicável, inclusive as normas de proteção ao consumidor. 

 

11.2. Ainda, em hipótese alguma o USUÁRIO poderá utilizar o serviço para: 

a) prestação de serviço, que origina a gestão do pagamento e recebimento, seja ilícita ou 

contrária à moral ou aos bons costumes, ou que viole este Termo ou a política de privacidade, 

ou cuja finalidade seja a de fraudar a lei ou os direitos de terceiros. 

b) utilizar indevidamente o login e senha de terceiros. 

c) utilizar para fins ilegais ou em desacordo com a legislação brasileira ou ainda que 

caracterizem prática tipificada como crime. 

  

11.3. São obrigações do USUÁRIO, além das demais previstas neste instrumento e na 

legislação aplicável: 

a) pagar a remuneração devida. 

b) ser o único responsável pelo uso e guarda do login e senha de acesso ao Serviço, obrigando se a honrar todos os compromissos financeiros e/ou legais daí resultantes. 

c) utilizar o software colocado à sua disposição somente para os fins estabelecidos no presente. 

 

11.4. O USUÁRIO será o único e exclusivo responsável pela utilização do Serviço, respondendo perante a INFINITIBANK e/ou terceiros pelos danos e prejuízos, inclusive lucros cessantes que vier a 

ocasionar em razão da má utilização do mesmo. 

 

11.5. O USUÁRIO será o único responsável pelas infrações que cometer quanto ao direito de uso dos softwares ou outro processo de execução protegido por marcas e patentes  relacionados a este instrumento, respondendo diretamente por quaisquer indenizações, taxa sou comissões que forem devidas, bem como por quaisquer reclamações resultantes de sua utilização inadequada. 

 

11.6. O USUÁRIO não poderá alterar endereços de máquinas, ou o IP (Internet Protocol)  de rede ou de correio eletrônico, na tentativa de responsabilizar terceiros ou ocultar sua identidade ou autoria. Na hipótese de ocorrência dos casos aqui mencionados, a INFINITIBANK e seus prestadores de serviços poderão disponibilizar a qualquer tempo às autoridades competentes toda e qualquer informação sobre o USUÁRIO, bem como cancelar sua Conta sem prévio aviso, respondendo este civil e penalmente pelos atos praticados. 

 

11.7. O USUÁRIO assumirá toda e qualquer responsabilidade civil e criminal perante a INFINITIBANK e terceiros pelo descumprimento das obrigações, pela inexatidão das declarações e por qualquer outra conduta ilícita cometida, sob pena de indenizar prontamente a INFINITIBANK e/ou terceiros pelos prejuízos decorrentes de tais descumprimentos e ilícitos. 

 

11.8. Na ocorrência de ação, ato ou procedimento administrativo ou judicial ajuizados pelo (s) sacado (s) em face da INFINITIBANK e seus prestadores de serviços , o USUÁRIO se compromete a requerer a exclusão e/ou substituição dela no polo passivo ou, caso esta exclusão e/ou substituição não sejam deferidas, a arcar com os custos de honorários advocatícios e custas judiciais. O USUÁRIO concorda, ainda, que a INFINITIBANK e seus prestadores de serviços os denunciarão à lide ou o chamarão ao processo, se necessário. 

 

11.9. O USUÁRIO se compromete a assumir quaisquer débitos, independentemente da natureza, oriundos de ações, atos e procedimentos administrativos ou judiciais interpostos pelo sacado em face da INFINITIBANK e seus prestadores de serviços , inclusive os débitos apurados em 

acordo administrativo ou judicial celebrado a critério da INFINITIBANK e seus prestadores de serviços , responsabilizando-se o USUÁRIO, para todos os fins e efeitos de direito, de forma exclusiva, solidária entre si, incomunicável e irretratável pelo adimplemento de todas as respectivas obrigações e/ou condenações decorrentes de mencionadas ações, atos e procedimentos administrativos e judiciais.  

  

11.10. Todas as despesas judiciais e/ou extrajudiciais, como custas processuais, honorários de 

advogado, acordos, obrigações e/ou condenações, decorrentes de ações, atos ou procedimentos administrativos e/ou judiciais resultantes de ilícitos contratuais e/ou ilegalidades cometidos pelo USUÁRIO e eventualmente despendidos/antecipados pela INFINITIBANK e seus prestadores de serviços, serão única e exclusivamente suportadas pelo USUÁRIO. Para a efetivação do ressarcimento, a INFINITIBANK e seus prestadores de serviços poderão realizar 

diretamente descontos das quantias constantes na Conta do USUÁRIO e, caso inexista crédito em Conta, mediante o encaminhamento de boleto bancário ao USUÁRIO para a realização do pagamento, sem prejuízo da cobrança de juros, correção monetária e multa. 

 

12. DIREITOS DE PROPRIEDADE INTELECTUAL: 

 

12.1. Cada Parte reconhece os direitos de Propriedade Intelectual da outra, registrados ou não. 

 

12.2. São de propriedade exclusiva da INFINITIBANK e seus prestadores de serviços o conteúdo do 

aplicativo e plataforma Web, como textos, gráficos, planilhas, ícones, desenhos, programas de 

computador, aí incluídos o suporte lógico, a descrição básica e o material de apoio, os dados de qualquer natureza relacionados aos serviços objeto deste Termo, estando todos protegidos pelas leis brasileiras de direito intelectual, especialmente as de direito autoral, de proteção jurídica do programa de computador, de marcas, patentes, modelos e desenhos industriais, bem como pelos tratados internacionais relativos à matéria. 

  

12.3. A INFINITIBANK e seus prestadores de serviços tomarão todas as medidas judiciais e extrajudiciais cabíveis para coibir eventuais violações de seus direitos de Propriedade Intelectual por parte do USUÁRIO, sendo que todos os custos e despesas incorridos pela INFINITIBANK e seus prestadores de serviços nesse sentido, incluindo honorários advocatícios, deverão ser devidamente reembolsados pelo USUÁRIO. 

 

13. PRAZO E ALTERAÇÕES CONTRATUAIS: 

  

13.1. Este termo é celebrado por prazo indeterminado, entrando e mantendo-se em vigor partir da data de sua aceitação pelo USUÁRIO. 

 

13.2. Este termo é celebrado por prazo indeterminado, entrando e mantendo-se em vigor a partir da data de sua aceitação pelo USUÁRIO. 

  

13.3. A INFINITIBANK e seus prestadores de serviços poderão, a seu exclusivo critério e a qualquer  tempo, modificar, adicionar ou remover quaisquer cláusulas ou condições deste Termo, inclusive as relativas à remuneração, desde que o USUÁRIO seja devidamente informado quanto a alteração do presente termo. 

 

13.4. A fim de manter e atender os últimos requisitos de mercado e de desenvolvimento tecnológicos, a INFINITIBANK e seus prestadores de serviços poderão, a seu exclusivo critério e a qualquer tempo, alterar, tanto em forma como em conteúdo, suspender ou cancelar quaisquer dos Serviços, produtos, utilidade ou aplicação, disponibilizados por si ou por terceiros, inclusive com relação ao Serviço e à remuneração e a qualquer dos serviços adicionais prestados nos termos deste Termo. 

 

13.5. O presente Termo poderá ser rescindido pela INFINITIBANK e seus prestadores de serviços , de pleno direito, independentemente de qualquer notificação ou interpelação, judicial ou extrajudicial, no caso de descumprimento pelo USUÁRIO de suas obrigações ou pela inexatidão das declarações assumidas ou prestadas por ele no presente instrumento. 

 

13.6. O presente Termo, também, será rescindido de pleno direito, independentemente  de qualquer notificação ou interpelação, judicial ou extrajudicial, no caso de o USUÁRIO, de qualquer forma, comprometer a imagem pública da INFINITIBANK e/ou de qualquer empresa associada a ela na prestação do Serviço. 

 

13.7. Caso o término do presente Termo ocorra consoante as cláusulas 15.4 ou 15.5, por culpa do USUÁRIO, a INFINITIBANK e seus prestadores de serviços poderão bloquear o seu acesso à Conta e ressarcir-se de todos os custos, despesas, encargos operacionais e eventuais indenizações mediante a dedução dos créditos da Conta do USUÁRIO. Caso haja excedente, a INFINITIBANK e seus prestadores de serviços procederão conforme o disposto no presente Termo, 

isto é, encaminhará ao USUÁRIO um boleto bancário para pagamento. 

 

14. DAS GARANTIAS LIMITADAS: 

 

14.1. Na extensão máxima permitida pela lei em vigor, o serviço é fornecido “no estado em que se encontra” e “conforme a disponibilidade”, com todas as falhas e sem garantia de qualquer espécie. 

 

14.2. A INFINITIBANK e seus prestadores de serviços não garantem que as funções contidas no  serviço atendam às necessidades do USUÁRIO, que a operação do serviço será ininterrupta ou livre de erros, que qualquer serviço continuará disponível, que os defeitos no serviço serão corrigidos ou que o serviço será compatível ou funcione com qualquer serviço, aplicações ou serviços de terceiros. 

 

15. LIMITAÇÃO DE RESPONSABILIDADE: 

 

15.1. Em hipótese alguma, a INFINITIBANK e seus prestadores de serviços serão responsáveis por danos pessoais ou qualquer prejuízo incidental, indireto ou consequente, incluindo, sem limitação, prejuízos por perda de lucro, corrupção ou perda de dados, falha de transmissão ou recepção de dados, não continuidade do negócio ou qualquer outro prejuízo ou perda comercial, decorrentes ou relacionados ao seu uso ou à sua inabilidade em usar o serviço, por qualquer outro motivo. 

 

16. DISPOSIÇÕES GERAIS: 

 

16.1. Lei aplicável. Este instrumento está sujeito à Lei n. 12.865, de 9 de outubro de 2013, às  Resoluções do Conselho Monetário Nacional e às Circulares do Banco Central do Brasil aplicáveis os Meios de Pagamento e às Instituições de Meios de Pagamento que integram o Sistema de Pagamentos Brasileiro (SPB) e às demais disposições relativas aos contratos em geral. 

  

16.2. O USUÁRIO se obriga a obedecer a todas as leis aplicáveis relativas às suas obrigações contratuais, devendo levar imediatamente ao conhecimento da INFINITIBANK e seus prestadores de serviços quaisquer circunstâncias que possam ser impeditivas do cumprimento das suas obrigações contratuais. 

 

16.3. Apesar de, tecnicamente, o serviço ser passível de utilização em qualquer local, a relação entre a INFINITIBANK e seus prestadores de serviços e o USUÁRIO estará sempre sujeito à legislação brasileira, sendo que a liquidação será necessariamente em moeda nacional (“Real”) e realizada por meio de Instituição Financeira brasileira. 

 

16.4. Comunicação. As partes reconhecem os serviços de SMS, e-mail e o canal próprio de  mensagem do aplicativo como formas válidas, eficazes e suficientes de comunicação e aceitam a página inicial de acesso do Portal como meio válido, eficaz e suficiente para a divulgação de qualquer assunto que se refere aos serviços objeto deste Termo, bem como as condições de sua prestação ou a qualquer outro assunto nele abordado. 

  

16.5. Tributos. A INFINITIBANK e seus prestadores de serviços não se responsabilizam pelo pagamento dos tributos devidos pelo USUÁRIO, seja na qualidade de pessoa física ou jurídica, ou por seus tomadores de serviços, sacados, em razão das transações realizadas.  

  

16.6. Cessão. O USUÁRIO não poderá ceder o presente Termo a terceiros. Em contra partida, INFINITIBANK e seus prestadores de serviços poderão independentemente de qualquer aviso ou notificação ao USUÁRIO, ceder o presente instrumento, no todo ou em parte, às empresas de 

seu grupo econômico ou não, a qualquer momento. 

 

16.7. Novação. O não exercício por qualquer uma das partes de qualquer direito consagrado no presente instrumento não representará novação, transação ou renúncia de tal direito, o qual poderá ser exercido a qualquer tempo. 

 

16.8. A INFINITIBANK e seus prestadores de serviços não serão responsáveis por nenhum dano que 

porventura seja ocasionado por perda de conteúdo armazenado, por atrasos (de qualquer tipo) na 

transmissão, perda na transmissão, ou interrupção dos serviços causados por negligência das empresas envolvidas no processo ou erros e omissões do USUÁRIO, falha de performance, interrupção, delegação, defeito, atrasos na operação ou transmissão falha de linha de  comunicação de acesso ocasionada pela empresa de telefonia responsável pelo serviço de suporte ao serviço prestado, furto ou destruição por algum acesso não autorizado, alterações ou uso de gravações, não se responsabilizando, inclusive, por informações sigilosas enviadas por email. 

  

16.9. As partes concordam que a INFINITIBANK e seus prestadores de serviços poderão, a seu exclusivo critério, alterar qualquer procedimento técnico referente aos serviços contratados 

sem prévio aviso. 

 

16.10. Se qualquer cláusula, termo ou condição deste Termo for considerada nula ou vier a ser anulada por qualquer decisão judicial transitada e julgada, tal nulidade ou anulabilidade não contaminará as demais cláusulas deste Instrumento, que permanecerão em pleno vigor, desde que ainda se possa manter o equilíbrio contratual ora ajustado. 

 

16.11. Os títulos empregados para referenciar as cláusulas deste instrumento são meramente ilustrativos, devendo em todas as ocasiões os termos das cláusulas prevaleceram em relação aos títulos empregados. 

 

17. DA ACEITAÇÃO DO TERMO DE SERVIÇO: 

 

17.1. Ao preencher e enviar o formulário disponível no aplicativo móvel e ao aceitar o presente Termo de Uso, o USUÁRIO automaticamente concederá aceitação ao seu conteúdo. A aceitação deste Termo de Serviço manifesta a vontade inequívoca das partes de celebrar um contrato por meio eletrônico e na concordância com as condições necessárias para a utilização do serviço, dispostas abaixo. A não aceitação ou violação ao Termo de Serviço resultará no encerramento da conta do USUÁRIO perante a INFINITIBANK e seus prestadores de serviços. Pelo presente instrumento particular, de um lado, INFINITIBANK sediada em Avenida Magalhães de Castro – 4.800 Torre 1 24º ANDAR SP, sob razão Social: INFINITIBANK CNPJ 05.234.447/0001-49, de outro lado, a pessoa, física ou jurídica, doravante denominada 

'USUÁRIO/ CONTRATANTE', que preencheu e enviou o formulário de identificação e qualificação disponível no aplicativo móvel e ou plataforma Web INFINITIBANK, concordando com o presente Termo, com as normas de segurança e privacidade e com as regras de uso do aplicativo. 

 

18. FORO: 

 

18.1. As Partes elegem, para dirimir eventuais demandas oriundas do presente instrumento, com 'renúncia a qualquer outro, por mais privilegiado que seja, o Foro da cidade de São Paulo/SP `;
