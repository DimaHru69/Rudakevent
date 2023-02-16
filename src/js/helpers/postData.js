const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    body: data,
  });

  return await result.json();
};

export { postData };
