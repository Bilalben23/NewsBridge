import React from 'react'
import { countries } from '../utils/countries'

export default function CountrySelector() {
    return (
        <select className='select select-bordered select-primary'>
            {
                countries.map(country => {
                    return <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                })
            }
        </select>
    )
}
