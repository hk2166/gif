'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const categories = [
  {
    title: "Fresh Produce",
    description: "Farm-fresh vegetables, fruits, and herbs",
    image: "/images/categories/fresh-produce.jpg",
    items: ["Vegetables", "Fruits", "Herbs", "Microgreens"]
  },
  {
    title: "Meat & Seafood",
    description: "Premium quality meats and fresh seafood",
    image: "/images/categories/meat-seafood.jpg",
    items: ["Chicken", "Mutton", "Fish", "Seafood"]
  },
  {
    title: "Dairy & Eggs",
    description: "Fresh dairy products and farm eggs",
    image: "/images/categories/dairy.jpg",
    items: ["Milk", "Cheese", "Butter", "Eggs"]
  },
  {
    title: "Packaging",
    description: "Food-grade packaging solutions",
    image: "/images/categories/packaging.jpg",
    items: ["Containers", "Bags", "Boxes", "Disposables"]
  },
  {
    title: "Kitchen Equipment",
    description: "Professional kitchen tools and equipment",
    image: "/images/categories/equipment.jpg",
    items: ["Utensils", "Appliances", "Tools", "Storage"]
  },
  {
    title: "Cleaning Supplies",
    description: "Restaurant-grade cleaning products",
    image: "/images/categories/cleaning.jpg",
    items: ["Detergents", "Sanitizers", "Equipment", "Tools"]
  }
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of high-quality products and supplies for your restaurant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-9 relative bg-gray-100">
                <div className="w-full h-48 relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary/60 rounded-full mr-2"></span>
                      {item}
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary font-semibold group-hover:text-primary/80"
                >
                  Explore Category
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button className="btn-primary">
            View All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
} 