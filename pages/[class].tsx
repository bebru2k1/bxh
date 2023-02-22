import Navbar, { User } from "@/components/common/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassTop() {

  const [data, setData] = useState<User[] | null>(null)
  const [nameClass, setNameClass] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    if(router.query.class) {
      if(router.query.class === "10a03") {
        setNameClass("10A03")
        setData([
        {
          points: 10,
          display_name: "Nhật",
          avatar : 'https://wdwicpictures.com/hinh-anh-sieu-nhan-gao-do/imager_1_4674_700.jpg'
        },
        {
          points: 20,
          display_name: "Tuấn",
          avatar : 'https://wdwicpictures.com/hinh-anh-sieu-nhan-gao-do/imager_1_4674_700.jpg'
        },
        {
          points: 10,
          display_name: "Dương",
          avatar : 'https://wdwicpictures.com/hinh-anh-sieu-nhan-gao-do/imager_1_4674_700.jpg'
        }])
      } else if(router.query.class === "10d02") {
        setNameClass("10D02")
        setData([{
          points: 20,
          display_name: "Tài",
          avatar : 'https://wdwicpictures.com/hinh-anh-sieu-nhan-gao-do/imager_1_4674_700.jpg'
        }])
      }
    }
  },[router.query])

  return data ? <Navbar data={data} nameClass={nameClass}/> : <></>
}