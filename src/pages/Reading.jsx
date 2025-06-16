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
  }
]

const currentReading = {
  title: "Principles: Life and Work",
  author: "Ray Dalio",
  tags: ["Business", "Philosophy", "Leadership"]
}

const readingList = [
  "The Last Lecture",
  "Mindset: The New Psychology of Success",
  "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
  "10% Happier",
  "Atomic Habits",
  "Breaking the Habit of Being Yourself",
  "The Richest Man in Babylon",
  "The Psychology of Money",
  "Daily Laws",
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
          <div className="grid grid-cols-1 gap-6">
            <BookCard book={currentReading} isCurrent={true} />
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
