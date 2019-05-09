// REDDIT SELECTORS
// ==================

export const getPosts = state => {
  if (state
   && state.reddit
   && state.reddit.listing
   && state.reddit.listing.data
   && state.reddit.listing.data.children
   && Array.isArray(state.reddit.listing.data.children)
  ) {
    return state.reddit.listing.data.children;
  } else {
    return [];
  }
};
