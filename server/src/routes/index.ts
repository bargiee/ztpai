import { Router } from 'express';
import userRoutes from './userRoutes';
import deckRoutes from './deckRoutes';
import flashcardRoutes from './flashcardRoutes';
import favoriteDeckRoutes from './favoriteDeckRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/decks', deckRoutes);
router.use('/flashcards', flashcardRoutes);
router.use('/favorite-decks', favoriteDeckRoutes);

export default router;
