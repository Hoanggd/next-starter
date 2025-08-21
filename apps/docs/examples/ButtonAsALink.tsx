import { Button } from '@workspace/ui/components/button'
import { SquareArrowOutUpRight } from 'lucide-react'

export const ButtonAsALink = () => {
  return (
    <Button asChild>
      <a href="https://ui.shadcn.com/" target="_blank">
        Shadcn UI
        <SquareArrowOutUpRight />
      </a>
    </Button>
  )
}
