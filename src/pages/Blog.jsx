import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import freakonomicsImage from '@/assets/images/freakonomics.jpg'
import websiteTutorialImage from '@/assets/images/website_tutorial.webp'
import housePricesImage from '@/assets/images/HousePricesArticle.webp'
import AIvenndiagramImage from '@/assets/images/AIvenndiagram.webp'
import windows11Image from '@/assets/images/windows11.webp'
import actinfImage from '@/assets/images/actinf1_2.jpeg'
import polymathImage from '@/assets/images/polymath_article_image.png'

const articles = [
  {
    title: "Explore, Specialize, Repeat: What It Means to Be a Polymath Today",
    description: "Discover the modern approach to becoming a polymath in today's specialized world. Learn how to balance broad exploration with deep expertise and why this matters more than ever in the 21st century.",
    date: "July 3, 2025",
    image: polymathImage,
    tags: ["Personal Development", "Learning", "Polymath"],
    link: "https://medium.com/@harshilshah28/explore-specialize-repeat-what-it-means-to-be-a-polymath-today-b692f8b47c24"
  },
  {
    title: "How to Set Up a Free Windows or Linux Virtual Machine on Azure (Step-by-Step Guide for Beginners)",
    description: "Step-by-step guide to set up a free Windows or Linux virtual machine through Azure on Mac or any OS using free credits.",
    date: "May 18, 2025",
    image: windows11Image,
    tags: ["Cloud Computing", "Tutorial", "Azure"],
    link: "https://medium.com/@harshilshah28/how-to-set-up-a-free-windows-or-linux-virtual-machine-on-azure-step-by-step-guide-for-beginners-2391bce5235a"
  },
  {
    title: "Autonomous Navigation with Active Inference: My Journey So Far",
    description: "A Beginner-Friendly Guide to Active Inference for Autonomous Navigation: Pathfinding with Generative Models and Variational Free Energy",
    date: "May 11, 2025",
    image: actinfImage,
    tags: ["Active Inference", "AI/ML", "Research"],
    link: "https://medium.com/@harshilshah28/autonomous-navigation-with-active-inference-my-journey-so-far-d1852e23cc2a"
  },
  {
    title: "What Freakonomics Taught Me About Incentives, Information, and the Hidden Side of Life",
    description: "Explore Freakonomics by Steven Levitt & Stephen Dubner—learn how data, incentives, and curiosity uncover hidden truths about everyday life.",
    date: "April 20, 2025",
    image: freakonomicsImage,
    tags: ["Economics", "Psychology", "Book Review"],
    link: "https://medium.com/@harshilshah28/what-freakonomics-taught-me-about-incentives-information-and-the-hidden-side-of-life-72d2d6d24f1a"
  },
  {
    title: "Build Your Own Website (Personal Portfolio, Blog, Anything!) Using Just Cursor and GitHub — No Code Needed & 100% Free",
    description: "A beginner-friendly guide to building any website (personal portfolio, blog, anything!) using only Cursor and GitHub Pages: 100% free & no coding.",
    date: "April 18, 2025",
    image: websiteTutorialImage,
    tags: ["Web Development", "Tutorial", "AI Tools"],
    link: "https://medium.com/@harshilshah28/build-a-personal-portfolio-website-using-only-cursor-and-github-for-free-no-coding-164419b86b54"
  },
  {
    title: "Beginner Machine Learning Project: Step-by-Step Guide to Predicting London House Prices",
    description: "A comprehensive guide to building your first machine learning project.",
    date: "April 4, 2025",
    image: housePricesImage,
    tags: ["AI/ML", "Guide", "Project"],
    link: "https://medium.com/@harshilshah28/beginner-machine-learning-project-step-by-step-guide-to-predicting-london-house-prices-c4bcb36a9c6c"
  },
  {
    title: "My 2024 AI/ML Journey: Some Helpful Tips for Beginners",
    description: "Insights and lessons learned from my journey into AI and machine learning, including resources, strategies, and common pitfalls to avoid.",
    date: "Jan 4, 2025",
    image: AIvenndiagramImage,
    tags: ["AI/ML", "Guide"],
    link: "https://medium.com/@harshilshah28/my-2024-ai-ml-journey-some-helpful-tips-for-beginners-8b7f7b7f7b7f"
  }
]

const ArticleCard = ({ article, index = 0 }) => (
  <a
    href={article.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-foreground/80 mb-3 line-clamp-3">
        {article.description}
      </p>
      <p className="text-xs text-muted-foreground">
        {article.date}
      </p>
    </div>
  </a>
)

// Function to parse date string into Date object for sorting
const parseDate = (dateStr) => {
  const months = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  
  // Handle both "Month Day, Year" and "Month Day, Year" formats
  const parts = dateStr.split(/[ ,]+/).filter(part => part !== '');
  const month = months[parts[0]];
  const day = parseInt(parts[1].replace(',', ''));
  const year = parseInt(parts[2]);
  
  return new Date(year, month, day);
};

// Sort articles by date (newest first)
const sortedArticles = [...articles].sort((a, b) => {
  return parseDate(b.date) - parseDate(a.date);
});

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Blog & Articles</h1>
          <p className="text-muted-foreground">Thoughts and insights on AI, research, and more</p>
        </div>

        {/* Articles Grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {sortedArticles.map((article, index) => (
              <ArticleCard key={article.title} article={article} index={index} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-3">More Articles Coming Soon</h3>
          <p className="text-foreground/80 mb-4">
            I'm working on new content about active inference, machine learning, and research insights.
          </p>
          <p className="text-sm text-muted-foreground">
            Follow me on{' '}
            <a 
              href="https://medium.com/@harshilshah28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Medium
            </a>
            {' '}for updates on new articles.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

