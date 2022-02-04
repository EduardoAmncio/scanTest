export enum CardRoutes {
  cardManagement = "/card",
  cardOption = "/card/details",

  enterCurrentPassword = "/card/change-password/current",
  enterNewPassword = "/card/change-password/new",
  confirmNewPassword = "/card/change-password/confirm",
  validationTokenPassword = "/card/change-password/validate",

  cancel = "/card/cancel",
  cancelReason = "/card/cancel/reason",
  cancelWarning = "/card/cancel/warning",

  reissue = "/card/reissue",
  reissueWarning = "/card/reissue/warning",
  reissueReason = "/card/reissue/reason",
  address = "/card/reissue/address",
  reissueDetails = "/card/reissue/replacement-details",
  updateAddress = "/card/reissue/update-address",

  activeNewCard = "/card/associate",
  activeFourDigits = "/card/associate/active-digits",
  associateNewCardCheck = "/card/associate/check-data",
  validationTokenPasswordAssociate = "/card/associate/validate-password",
  enterNewPasswordAssociate = "/card/associate/new-password",
  confirmNewPasswordAssociate = "/card/associate/confirm-password",
}
