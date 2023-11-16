import A from '@assets/images/acessibility/A.png';
import B from '@assets/images/acessibility/B.png';
import C from '@assets/images/acessibility/C.png';
import D from '@assets/images/acessibility/D.png';
import E from '@assets/images/acessibility/E.png';
import F from '@assets/images/acessibility/F.png';
import G from '@assets/images/acessibility/G.png';
import H from '@assets/images/acessibility/H.png';
import I from '@assets/images/acessibility/I.png';
import J from '@assets/images/acessibility/J.png';
import K from '@assets/images/acessibility/K.png';
import L from '@assets/images/acessibility/L.png';
import M from '@assets/images/acessibility/M.png';
import N from '@assets/images/acessibility/N.png';
import O from '@assets/images/acessibility/O.png';
import P from '@assets/images/acessibility/P.png';
import Q from '@assets/images/acessibility/Q.png';
import R from '@assets/images/acessibility/R.png';
import S from '@assets/images/acessibility/S.png';
import T from '@assets/images/acessibility/T.png';
import U from '@assets/images/acessibility/U.png';
import V from '@assets/images/acessibility/V.png';
import W from '@assets/images/acessibility/W.png';
import X from '@assets/images/acessibility/X.png';
import Y from '@assets/images/acessibility/Y.png';
import Z from '@assets/images/acessibility/Z.png';

const getCorrectLetterImage = (letter: string) => {
  switch (letter) {
    case 'A':
    case 'Ã':
      return A;
    case 'B':
      return B;
    case 'C':
    case 'Ç':
      return C;
    case 'D':
      return D;
    case 'E':
      return E;
    case 'F':
      return F;
    case 'G':
      return G;
    case 'H':
      return H;
    case 'I':
      return I;
    case 'J':
      return J;
    case 'K':
      return K;
    case 'L':
      return L;
    case 'M':
      return M;
    case 'N':
      return N;
    case 'O':
      return O;
    case 'P':
      return P;
    case 'Q':
      return Q;
    case 'R':
      return R;
    case 'S':
      return S;
    case 'T':
      return T;
    case 'U':
      return U;
    case 'V':
      return V;
    case 'W':
      return W;
    case 'X':
      return X;
    case 'Y':
      return Y;
    case 'Z':
      return Z;
  }
};

export { getCorrectLetterImage };
