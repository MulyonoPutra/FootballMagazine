import './text-area.scss'

const TextArea = ({...rest}) => {
  return (
    <div>
        <textarea {...rest} />
    </div>
  )
}
export default TextArea