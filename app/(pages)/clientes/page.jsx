"use client"
import Colors from "@/app/components/Colors";
import Table from "../../components/Table";
import { Button } from "rsuite";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientesRequest } from "@/app/store/modules/cliente/actions";

export default function () {
  const dispatch = useDispatch();
  const { clientes } = useSelector((state) => state.clientes)

  useEffect(() => {
    const filtros = {
      salaoId: "672a645394524c18905aca24",
    }
    
    dispatch(fetchClientesRequest(filtros)); 
  }, [dispatch])
  
  return(
    <div className="flex-1 p-5 overflow-auto shadow shadow-gray-600">
      <div className="grid-rows-1">
        <div className="grid-cols-12">
          <div className="w-full flex justify-between">
            <h2 className="mb-4 mt-0 font-bold text-2xl">Clientes</h2>
            <div>
              <button className="bg-green-600 p-2 rounded cursor-pointer">
                <span className="font-bold text-lavender">+ Novo cliente</span>
              </button>
            </div>
            <Colors/>
          </div>
          <Table 
            data={clientes}
            config={[
              { label: "Primeiro Nome", key: "nome" },
              { label: "Último  Nome", key: "sobrenome" },
              { label: "Gênero", key: "genero", width: 60, fixed: true },
              { label: "Email", key: "email" },
              { label: "Whatsapp", key: "telefone", width: 150, fixed: true },
            ]}
            actions={(cliente) => (
              <Button color="blue" size="xs">Ver Info</Button>
            )}
            onRowClick={(cliente) => {alert(cliente.firstName)}}
          />
        </div>
      </div>
    </div>
  )
}
