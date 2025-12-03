import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const finishedBooks = [
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    tags: ["Business", "Memoir", "Entrepreneurship"]
  },
  {
    title: "Freakonomics",
    author: "Steven D. Levitt & Stephen J. Dubner",
    tags: ["Economics", "Psychology"]
  },
  {
    title: "Essentialism",
    author: "Greg McKeown",
    tags: ["Productivity", "Personal Development"]
  },
  {
    title: "10% Happier",
    author: "Dan Harris",
    tags: ["Self-Help", "Mindfulness", "Memoir"]
  },
  {
    title: "The Last Lecture",
    author: "Randy Pausch & Jeffrey Zaslow",
    tags: ["Memoir", "Inspiration", "Life Lessons"]
  },
  {
    title: "Concrete Rose",
    author: "Angie Thomas",
    tags: ["Fiction", "Young Adult", "Coming of Age"]
  },
  {
    title: "Once and For All",
    author: "Sarah Dessen",
    tags: ["Young Adult", "Romance", "Contemporary Fiction"]
  },
  {
    title: "Infinite in Between",
    author: "Carolyn Mackler",
    tags: ["Young Adult", "Coming of Age", "Contemporary Fiction"]
  },
  {
    title: "You Don't Live Here",
    author: "Robyn Schneider",
    tags: ["Young Adult", "Contemporary Fiction", "LGBTQ+"]
  },
  {
    title: "Invisible Ghosts",
    author: "Robyn Schneider",
    tags: ["Young Adult", "Contemporary Fiction", "Paranormal"]
  },
  {
    title: "Extraordinary Things",
    author: "Beth Ann Bauman",
    tags: ["Young Adult", "Contemporary Fiction", "Short Stories"]
  },
  {
    title: "All the Bright Places",
    author: "Jennifer Niven",
    tags: ["Young Adult", "Contemporary Fiction", "Mental Health"]
  },
  {
    title: "Sunrise on The Reaping",
    author: "Suzanne Collins",
    tags: ["Young Adult", "Dystopian", "Science Fiction"]
  },
  {
    title: "The Beginning of Everything",
    author: "Robyn Schneider",
    tags: ["Young Adult", "Contemporary Fiction", "Coming of Age"]
  },
  {
    title: "How to Love",
    author: "Katie Cotugno",
    tags: ["Young Adult", "Romance", "Contemporary Fiction"]
  },
  {
    title: "Oedipus Rex",
    author: "Sophocles",
    tags: ["Classic", "Tragedy", "Greek Literature"]
  },
  {
    title: "Night",
    author: "Elie Wiesel",
    tags: ["Memoir", "History", "Holocaust"]
  }
]

const currentReadings = [
  {
    title: "The Daily Laws",
    author: "Robert Greene",
    tags: ["Personal Development", "Psychology", "Strategy"]
  },
  {
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    tags: ["Business", "Philosophy", "Leadership"]
  },
  {
    title: "The Subtle Art of Not Giving a F***",
    author: "Mark Manson",
    tags: ["Self-Help", "Philosophy", "Personal Development"]
  },
  {
    title: "Mindset: The New Psychology of Success",
    author: "Carol Dweck",
    tags: ["Psychology", "Personal Development", "Self-Help"]
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    tags: ["Romance", "Fiction", "Contemporary"]
  }
]

const readingList = [
  "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
  "Atomic Habits",
  "Breaking the Habit of Being Yourself",
  "The Richest Man in Babylon",
  "The Psychology of Money",
  "Sherlock Holmes",
  "The Grapes of Wrath",
  "The Count of Monte Cristo"
]

const BookCard = ({ book, index = 0, isCurrent = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-card border border-border rounded-lg p-6"
  >
    <div className="flex items-start">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-foreground">{book.title}</h3>
        <p className="text-foreground/80 text-sm mb-2">by {book.author}</p>
        <div className="flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      {isCurrent && (
        <Badge variant="default" className="ml-2">
          Currently Reading
        </Badge>
      )}
    </div>
  </motion.div>
)

export default function Reading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Reading List</h1>
        <p className="text-muted-foreground mb-8">Documenting my reading journey</p>
        
        {/* Currently Reading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Currently Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentReadings.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} isCurrent={true} />
            ))}
          </div>
        </motion.div>

        {/* Books I've Finished */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Books I've Finished</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {finishedBooks.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} />
            ))}
          </div>
        </motion.div>
        {/* Reading List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Up Next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {readingList.map((book, index) => (
              <motion.div
                key={book}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-card hover:bg-card/80 transition-colors border border-border rounded-lg p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-1 bg-primary rounded-full mt-1"></div>
                  <h3 className="text-foreground text-sm">{book}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
