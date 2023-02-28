import Navbar, { User } from "@/components/common/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { pointsA03, pointsD02 } from '../data/data_point_class'
export default function ClassTop() {

  const [data, setData] = useState<User[] | null>(null)
  const [nameClass, setNameClass] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    if (router.query.class) {
      if (router.query.class === "10a03") {
        setNameClass("10A03")
        setData(pointsA03)
      } else if (router.query.class === "10d02") {
        setNameClass("10D02")
        setData(pointsD02)
      }
    }
  }, [router.query])

  return data ? <Navbar data={data} nameClass={nameClass} /> : <></>
}