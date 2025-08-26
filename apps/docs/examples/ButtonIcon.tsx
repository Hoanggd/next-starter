import { Button } from '@workspace/ui/components/button'
import { Trash } from 'lucide-react'

export function ButtonIcon() {
  return (
    <Button size="icon" variant="ghost">
      <Trash />
    </Button>
  )
}
