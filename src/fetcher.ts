export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit["headers"]
): ((variables?: TVariables) => Promise<TData>) => {
  // it is safe to call React Hooks here.

  return async (variables?: TVariables) => {
    const res = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error…");
    }

    return json.data;
  };
};
