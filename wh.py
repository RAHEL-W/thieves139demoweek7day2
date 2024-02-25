
def lst_st(list):
  count = 0
  for lst in list:
    if lst == 'F':
      count +=1
    if count >=2:
      return 'outage'
    else:
      return 'power'
    
print(lst_st([ 'T', 'T', 'T', 'T', 'F' ]) )   
      

  
 