import { createClient } from "@supabase/supabase-js"

const EnterComment = async (text: string, video_id: string) => {
  const supabaseAdmin = createClient(
    "https://ufinqahbxsrpjbqmrvti.supabase.co",
    process.env.REACT_APP_SUPABASE_PROJECT_API_KEY as string,
  )

  try {
    const { data, error } = await supabaseAdmin.from("video_comment").insert([
      {
        text,
        video_id,
      },
    ])

    if (error) {
      console.error(`데이터 통신에 실패하였습니다..😵‍💫 ${error.message}`)
    } else {
      console.log("Supabase 데이터 삽입 성공:", data)
    }
  } catch (error) {
    console.error(`데이터 통신에 실패하였습니다..😵‍💫 ${error}`)
  }
}

export default EnterComment
