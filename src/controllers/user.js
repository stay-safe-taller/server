export const userGet = (req, res) => {
    try {
        res.status(200).json({
            msg: 'userGet'
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};