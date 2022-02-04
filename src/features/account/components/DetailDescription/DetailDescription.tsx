import React from "react";
import { TransactionDetails } from "features/account/redux/models/transactionDetails";
import { useMask } from "hooks/useMask";
import { maskTaxPayer } from "_utils/masks/taxPayer";
import { useStyle } from "./DetailDescription.style";
import { DateFormatter } from "_translate";
import { ConfigContext } from "_config";

interface DetailDescriptionProps {
  details?: TransactionDetails;
}

export const DetailDescription: React.FC<DetailDescriptionProps> = ({
  details,
}) => {
  const style = useStyle();
  const [maskedTaxId, setMaskedTaxId] = useMask(maskTaxPayer);

  React.useEffect(() => {
    if (details?.toTaxId) setMaskedTaxId(details.toTaxId);
  }, [details?.toTaxId, setMaskedTaxId]);

  return (
    <div className={style.detailContent}>
      <div> Transferência no valor de </div>
      <strong> R$ {details?.value ?? "---"} </strong>
      <div> para a conta de </div>
      <strong> {details?.toName ?? "---"} </strong>
      <div> com CPF </div>
      <strong> {details?.toTaxId ? maskedTaxId : "---"} </strong>
      <div> no dia </div>
      <strong>
        {details?.date ? DateFormatter.format(details.date) : "---"}
      </strong>
      <div> descrição da transferência </div>
      <strong> {details?.description ?? "---"} </strong>
      {details?.tags && (
        <React.Fragment>
          <div>Suas tags</div>
          {details.tags.map((t) => (
            <React.Fragment>
              <strong>{t}</strong>
              <br />
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};
