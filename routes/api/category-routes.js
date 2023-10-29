const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/categories', async (req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
		const categories = await Category.findAll({
			include: [{ model: Product }],
		});
		res.status(200).json(categories);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/categories/:id', async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	try {
		const category = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		if (!category) {
			res.status(404).json({
				message: 'No category found with that id!',
			});
			return;
		}
		res.status(200).json(category);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/categories', (req, res) => {
	// create a new category
});

router.put('/categories/:id', (req, res) => {
	// update a category by its `id` value
});

router.delete('/categories/:id', (req, res) => {
	// delete a category by its `id` value
});

module.exports = router;
