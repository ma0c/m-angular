export const openSnackBar = (message: string, action: string, snackBar) => {
  snackBar.open(message, action, {
    duration: 3000,
  });
};

/**
 *
 * @param message message to show
 * @param actionMessage message for action
 * @param snackBar snackBar object in the component
 * @param translateService translate object in the component
 *
 * @description general method to open a snackbar from angular/material, given a keys from translation messages and actually is using for
 * errors
 */
export const openSnackBarWithTranslate = async (message: string, actionMessage: string, snackBar: any, translateService) => {
  const msg: any = await translateService.get(message);
  const buttonText: any = await translateService.get(actionMessage);
  openSnackBar( msg, buttonText, snackBar);
};
