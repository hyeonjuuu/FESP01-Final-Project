const formatDateDifference = (publishedAt: string) => {
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);

  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysDifference === 0) {
    return "오늘";
  } else if (daysDifference === 1) {
    return "어제";
  } else if (daysDifference < 7) {
    return `${daysDifference}일 전`;
  } else if (daysDifference < 30) {
    const weeksDifference = Math.floor(daysDifference / 7);
    return `${weeksDifference}주 전`;
  } else if (daysDifference < 365) {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `${monthsDifference}개월 전`;
  } else {
    const yearsDifference = Math.floor(daysDifference / 365);
    return `${yearsDifference}년 전`;
  }
};

export default formatDateDifference;
