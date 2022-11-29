while True: #loop infinito
   n = int(input('Escolha a sua Tabulada: '))
   n1 = int(input('Digitar valor inicial multiplicador: '))
   n2 = int(input('Digitar valor final multiplicador: '))
   c=0

   for x in range(n1-n2):
      print(f'{n} x {n1+c} = {n*n1}')
      c =+ 1

      
   #  print('_'*15)
   #  if n1 in range(1, 11):
   #      print(f'{n} x {n1} = {n*n1}')
   #      if n2 in range(1, 11):
   #          print(f'{n} X {n2} = {n*n2}')
   #      print('-' *15)


