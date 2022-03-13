export const registerPost = (req, res) => {
    try {
        res.status(200).json({
            msg: 'registerPost'
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};