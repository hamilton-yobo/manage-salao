"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay, endOfWeek, addMinutes } from 'date-fns';
import ptBR  from 'date-fns/locale/pt';
import { fetchAgendamentosRequest } from '@/app/store/modules/agendamento/actions';

const locales = {
  'pt': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Mensagens personalizadas para o calendário
const messages = {
  allDay: 'Todo o dia',
  previous: 'Anterior',
  next: 'Próximo',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
};

// Configuracao de formatos personalizados
const formats = {
  dayFormat: (date) => format(date, 'dd EE', {locale: ptBR}),
  weekdayFormat: (date) => format(date, 'EEE', {locale: ptBR}),
  dayHeaderFormat: (date) => format(date, 'EEEE, d MMMM', {locale: ptBR}),
  dayRangeHeaderFormat: ({start, end}) =>`${format(start, 'd MMM', {locale: ptBR})} - ${format(end, 'd MMM', {locale: ptBR})}`,
  monthHeaderFormat: (date) => format(date, 'MMMM yyyy', {locale: ptBR}),
  agendaDateFormat: (date) => format(date, 'dd/MM/yyyy', {locale: ptBR}),
  agendaTimeFormat: (date) => format(date, 'HH:mm', {locale: ptBR}),
  agendaHeaderFormat: ({start, end}) => `${format(start, 'dd/MM/yyyy', {locale: ptBR})} - ${format(end, 'dd/MM/yyyy', {locale: ptBR})}`,
  timeGutterFormat: 'HH:mm', // Formato de 24 horas na barra lateral
}

export default function () {
  const dispatch = useDispatch();
  const { agendamentos } = useSelector((state) => state.agendamentos);
  const loading = useSelector((state) => state.agendamentos.loading);
  const error = useSelector((state) => state.agendamentos.error);
  
  useEffect(() => {
      const filtros = {
        salaoId: "672a645394524c18905aca24",
        periodo: {
          inicio: startOfWeek(Date.now(),{weekStartsOn: 1}).toISOString(), 
          final: endOfWeek(Date.now(), {weekStartsOn: 8}).toISOString()
        }
      }
        // const fetchInterval = setInterval(() => {
            dispatch(fetchAgendamentosRequest(filtros));
        // }, 5000); // Atualiza a cada 5 segundos

        // return () => clearInterval(fetchInterval);
  }, [dispatch]);

  const formatEventos = agendamentos.map((agendamento) => ({
    title: `${agendamento.servicoId.titulo} - ${agendamento.clienteId.nome} - ${agendamento.clienteId.sobrenome} - \(${agendamento.colaboradorId.nome} ${agendamento.colaboradorId.sobrenome}\)`,
    start: new Date(agendamento.data),
    end: addMinutes(new Date(agendamento.data), agendamento.servicoId.duracao),
  }));
    
  const [view, setView] = useState('week'); // Visualizacao atual no estado
  const [data, setDate] = useState(new Date()); // Data atual no estado

  const handleChangeView = function (newView) {
    setView(newView); // Atualiza a visualizacao (dia, semana, mes)
  }

  const handleNavigate = function (newDate) {
    setDate(newDate); // Atualiza a data quando o usuario navega
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return(
    <div className="flex-1 p-5 overflow-auto shadow shadow-gray-600">
      <div className="grid-rows-1">
        <div className="grid-cols-12">
          <h2 className="mb-4 mt-0 font-bold text-2xl">Agendamentos</h2>
          <Calendar
            localizer={localizer}
            events={formatEventos}
            messages={messages}
            view={view}
            onView={handleChangeView} // atualiza o estado ao mudar a visualização
            date={data}
            onNavigate={handleNavigate}
            startAccessor="start"
            endAccessor="end"
            formats={formats}
            popup
            selectable
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  )
}
