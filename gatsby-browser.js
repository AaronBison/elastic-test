export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Hey!. ` +
      `This is FLB Documentation!`
  )
  if (answer === true) {
    window.location.reload()
  }
}