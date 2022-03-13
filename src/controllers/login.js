export const loginPost = (req, res) => {
    try {
        res.status(200).json({
            msg: 'loginPost'
        });
        
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};