export const getLevelById = id => state => {
    const levels = state.levels.get('levels');
    for (let i = 0; i < levels.size; i++) {
        let level = levels.get(i);
        if (level.get('id') === id) {
            return level;
        }
    }
};
