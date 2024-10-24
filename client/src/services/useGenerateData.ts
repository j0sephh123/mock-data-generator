import { useCallback } from "react";
import { DefaultError, useMutation } from "@tanstack/react-query";
import fetchApi from "../fetchApi";
import { endpoints, generateDataReqSchema } from "shared";
import { z } from "zod";

type Variables = z.infer<typeof generateDataReqSchema>
type Response = string;

export const useGenerateData = () => {
  const { mutateAsync } = useMutation<Response, DefaultError, Variables>({
    mutationFn: (body) => fetchApi.post(endpoints.generateData, body),
    onSuccess: () => {
    },
    onError(error) {
      console.error(error, "Error generating data!");
    },
  });

  return useCallback(
    (variables: Variables) => mutateAsync(variables),
    [mutateAsync]
  );
};
