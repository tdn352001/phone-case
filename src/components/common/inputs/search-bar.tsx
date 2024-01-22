'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import IconButton from '~/components/common/buttons/icon-button'

interface SearchBarProps {
  className?: string | string[]
  value?: string
  onChange?: (q: string) => void
  onSubmit?: (q: string) => void
}

const SearchBar = ({ className, value, onChange, onSubmit }: SearchBarProps) => {
  const [keyword, setKeyword] = useState()
  const handleSearch = useDebouncedCallback((q: string) => {
    onChange?.(q)
  }, 300)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value
    handleSearch(q)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>
          <span>Search</span>
          <input type="text" />
        </div>
        <IconButton icon="Search" />
      </label>
    </form>
  )
}

export default SearchBar
