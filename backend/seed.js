const pool = require('./config/database');

async function seedDatabase() {
  try {
    console.log('🌱 Seeding database...');

    // Insert sample categories
    await pool.execute(`
      INSERT IGNORE INTO categories (name, description, color) VALUES
      ('Italian', 'Classic Italian cuisine', '#ff6b6b'),
      ('Mexican', 'Spicy Mexican dishes', '#4ecdc4'),
      ('Desserts', 'Sweet treats and desserts', '#45b7d1'),
      ('Vegetarian', 'Plant-based recipes', '#96ceb4'),
      ('Quick & Easy', 'Fast recipes under 30 minutes', '#feca57'),
      ('Breakfast', 'Morning meals and brunch', '#fd79a8'),
      ('Dinner', 'Evening meals and hearty dishes', '#6c5ce7')
    `);

    // Insert sample ingredients
    await pool.execute(`
      INSERT IGNORE INTO ingredients (name, category, default_unit) VALUES
      ('Chicken breast', 'meat', 'lbs'),
      ('Ground beef', 'meat', 'lbs'),
      ('Salmon fillet', 'fish', 'pieces'),
      ('Tomatoes', 'vegetable', 'pieces'),
      ('Bell pepper', 'vegetable', 'pieces'),
      ('Onion', 'vegetable', 'pieces'),
      ('Garlic', 'vegetable', 'cloves'),
      ('Basil', 'herb', 'leaves'),
      ('Oregano', 'herb', 'tsp'),
      ('Olive oil', 'oil', 'tbsp'),
      ('Salt', 'seasoning', 'tsp'),
      ('Black pepper', 'seasoning', 'tsp'),
      ('Pasta', 'grain', 'cups'),
      ('Rice', 'grain', 'cups'),
      ('Cheddar cheese', 'dairy', 'cups'),
      ('Mozzarella cheese', 'dairy', 'cups'),
      ('Milk', 'dairy', 'cups'),
      ('Eggs', 'dairy', 'pieces'),
      ('Flour', 'baking', 'cups'),
      ('Sugar', 'baking', 'cups')
    `);

    console.log('✅ Database seeded successfully!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
  } finally {
    process.exit();
  }
}

seedDatabase();