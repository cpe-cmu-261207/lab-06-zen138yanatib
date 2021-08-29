
import axios from 'axios'
import { useEffect, useState } from 'react'

type fetchType = {
    time: { updated: string, updatedISO: string, updateduk: string }
    disclaimer: string
    bpi: { USD: { code: string, rate: string, description: string, rate_float: Float32Array }, THB: { code: string, rate: string, description: string, rate_float: Float32Array } }
}

const Current = () => {
    const [price, setPrice] = useState<fetchType | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchApi = async () => {
        try {
            const resp =
                await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            setPrice(resp.data)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchApi()
    }, [])

    const render = () => {
        if (loading)
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )
        else
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{price?.bpi.THB.rate.toLocaleString()} THB</p>
                    <p> (Last updated {price?.time.updated}) </p>
                </div>
            )
    }
    return (
        <div>
            {render()}
        </div>
    )

}

export default Current