import * as React from 'react';
import {
    Select,
    SelectGroup,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

const GuestSelect = () => {
  return (
    <Select>
        <SelectTrigger className='w-full bg-opacity-60'>
            <SelectValue placeholder='How many guests ?'></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Guests</SelectLabel>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
                <SelectItem value='4'>4</SelectItem>
                <SelectItem value='5'>5</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default GuestSelect
