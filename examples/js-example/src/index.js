import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'
import $ from 'jquery'


// This is the circle Web SDK provided by the circle developer hub

$(document).ready(function () {
  function onSubmit() {
    const sdk = new W3SSdk()

    sdk.setAppSettings({
      appId: $('#appId').val(),
    })
    sdk.setAuthentication({
      userToken: $('#userToken').val(),
      encryptionKey: $('#encryptionKey').val(),
    })

    sdk.execute($('#challengeId').val(), (error, result) => {
      if (error) {
        console.log(
          `${error?.code?.toString() || 'Unknown code'}: ${
            error?.message ?? 'Error!'
          }`
        )

        return
      }

      console.log(`Challenge: ${result.type}`)
      console.log(`status: ${result.status}`)

      if (result.data) {
        console.log(`signature: ${result.data?.signature}`)
      }
    })
  }

  $(function () {
    $('#verifyButton').click(onSubmit)
  })
})

