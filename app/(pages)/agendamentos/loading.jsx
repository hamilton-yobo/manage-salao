export default function Loading() {

  return(
    <div className="flex-1 p-5 overflow-auto shadow shadow-gray-600">
      <div className="grid-rows-1">
        <div className="grid-cols-12">
          <h2 className="mb-4 mt-0 font-bold text-2xl">Agendamentos</h2>
          <h3 className='w-fit m-auto font-bold text-xl'>A carregar...</h3>
        </div>
      </div>
    </div>
  )
}
