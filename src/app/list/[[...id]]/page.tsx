const List = ({ params: { id } }: { params: { id: string | string[] } }) => {
  console.log(id, 'server');
  const evals = id[1] === '1';
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center w-full h-full">
        {evals ? 'list' : 'list2'}
      </div>
    </div>
  );
};
export default List;
