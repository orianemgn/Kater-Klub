// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript


function isSameLanguage(list) {
  console.log(list[0])
  const initialValue = list[0].language;
  const filteredList = list.filter((candidate) => candidate.language !== initialValue);
  console.log(filteredList)
  return !(filteredList.length > 0);
}