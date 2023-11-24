import { createClient } from "@supabase/supabase-js"

const supabaseAdmin = createClient(
  "https://ufinqahbxsrpjbqmrvti.supabase.co",
  process.env.REACT_APP_SUPABASE_PROJECT_API_KEY as string,
)

// 댓글 등록 API
export const enterComment = async (text: string, video_id: string) => {
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

// 댓글 삭제 API
export const deleteComment = async (commentId: number) => {
  const { data, error } = await supabaseAdmin
    .from("video_comment")
    .delete()
    .eq("id", commentId)

  if (error) {
    console.error("Error deleting comment:", error.message)
  } else {
    console.log("Comment deleted successfully:", data)
  }
}
