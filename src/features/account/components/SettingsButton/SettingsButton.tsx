import React from "react";
import { useHistory } from "react-router-dom";
import { AccountRoutes } from "features/account/constants/routes";
import { settingsLabel } from "constants/buttons/labels";
import SettingsIcon from "_assets/icons/SettingIcon.svg";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";

export const SettingsButton: React.FC = () => {
  let history = useHistory();

  const onClick = () => history.push(AccountRoutes.settings);

  return (
    <ButtonWithFloatingIcon
      icon={SettingsIcon}
      iconAlt={settingsLabel}
      onClick={onClick}
    >
      {settingsLabel}
    </ButtonWithFloatingIcon>
  );
};
