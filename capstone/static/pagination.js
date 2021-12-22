$(function(){
    const rowsPerPage = 10
    const rows = $(".dataframe tbody tr")
    const rowsCount = rows.length
    const pageCount = Math.ceil(rowsCount / rowsPerPage)
    const numbers = $('#numbers')

    for (let i=0; i<pageCount;i++){
      numbers.append('<li><a href="#">' + (i+1) + '</a></li>')
    }

    $('#numbers li:first-child a').addClass('active')
    displayRows(1)
    $('#numbers li a').click(function(e){
      let $this = $(this)
      e.preventDefault()
      $('#numbers li a').removeClass('active')
      $this.addClass('active')
      displayRows($this.text())
    })

    function displayRows(index){
      let start = (index-1)*rowsPerPage
      let end = start + rowsPerPage
      rows.hide()
      rows.slice(start, end).show()
    }
  })