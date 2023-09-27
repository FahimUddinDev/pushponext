export default function cKey() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("keywords")) {
      return JSON.parse(localStorage.getItem("keywords"));
    }
    return false;
  }
  return false;
}
