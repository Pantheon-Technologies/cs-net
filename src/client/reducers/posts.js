const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_POST':
      return state.map(post => (post.id === action.id ? { ...post, completed: !post.completed } : post));
    default:
      return state;
  }
};

export default posts;
