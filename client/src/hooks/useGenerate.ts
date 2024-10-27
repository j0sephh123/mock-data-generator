import { useSnapshot } from "valtio";
import { fieldsActions } from "../store/fields/actions";
import { selectFields, selectTotalRows } from "../store/fields/derived";
import generateData from "../utils/generateData";
import { useCallback } from "react";

export default function useGenerate() {
  const { fields } = useSnapshot(selectFields);
  const { totalRows } = useSnapshot(selectTotalRows);

  const handlePreviewData = useCallback(() => {
    generateData({
      totalRows,
      fields,
    }).then((data) => {
      fieldsActions.setCode(JSON.stringify(data, null, 2));
    });
  }, [fields, totalRows]);

  return handlePreviewData;
}
