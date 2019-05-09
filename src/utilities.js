// UTILITIES
// =========
// Snippets for reuse around the app.

function getSubredditFromLocation(location) {
  const { pathname } = location;
  const parts = pathname.split("/");

  return typeof parts[1] === "string" ? parts[1] : "";
}

export {
  getSubredditFromLocation,
};
