export function Ball({ numbers }: any) {
  return (
    <>
      {numbers.map((element: any) => (
        <div className="bg-white p-11 rounded-full">{element}</div>
      ))}
    </>
  );
}
