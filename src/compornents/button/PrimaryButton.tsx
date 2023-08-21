export const PrimaryButton = (props) =>{
  const{children,href} = props

  return(
    <div className='common-btn01'>
          <a href={href}>{children}</a>
    </div>

  )

}