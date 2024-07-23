"use client"

import Pagina from "../template/Pagina";
import RegisterPanel from "../template/RegisterPanel";
import { useSearchParams } from 'next/navigation'

export default function registerDetails() {

  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const date = searchParams.get('date');
  const type = searchParams.get('type');
  const description = searchParams.get('description');
  const value = searchParams.get('value');
  const status = searchParams.get('status');

  return (
    <Pagina titulo="Descrição do registro">
      <RegisterPanel id={id} date={date} type={type} description={description} value={value} status={status} />
    </Pagina>
  )
}