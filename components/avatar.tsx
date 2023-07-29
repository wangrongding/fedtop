import Image from 'next/image'
type Props = {
  picture: string
  name?: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      <Image src={picture} className='mr-4 h-12 w-12 rounded-full' alt={name || ''} width={100} height={100} />
    </div>
  )
}

export default Avatar
